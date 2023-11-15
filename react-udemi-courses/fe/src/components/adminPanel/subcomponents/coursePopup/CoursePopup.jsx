import "./CoursePopup.scss";
import Modal from "../../../modal/Modal";
import { useContext, useState } from "react";
import { StoreContext } from "../../../../store/StoreProvider";
import request from "../../../../helpers/request";

const CoursePopup = ({
  authors = [],
  hidePopup,
  isEditMode = true,
  isOpenPopup,
  id,
  img = "",
  price = 0,
  title = "",
}) => {
  const [formAuthors, setFormAuthors] = useState(authors);
  const [formAuthor, setAuthor] = useState("");
  const [formImg, setImg] = useState(img);
  const [formPrice, setPrice] = useState(price);
  const [formTitle, setTitle] = useState(title);
  const { setCourses } = useContext(StoreContext);

  const handleOnChangeAuthor = (e) => setAuthor(e.target.value);
  const handleOnChangeImg = (e) => setImg(e.target.value);
  const handleOnChangePrice = (e) => setPrice(e.target.value);
  const handleOnChangeTitle = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const course = {
      authors: formAuthors,
      id,
      img: formImg,
      price: Number(formPrice),
      title: formTitle,
    };
    if (isEditMode) {
      const { data, status } = await request.put(`/courses`, course);
      if (status === 202) {
        setCourses(data.courses);
      }
    } else {
      const { data, status } = await request.post(`/courses`, course);
      if (status === 201) {
        setCourses(data.courses);
      }
    }

    hidePopup();
  };
  const addAuthor = (e) => {
    e.preventDefault();
    setFormAuthors((prev) => [...prev, formAuthor]);
    setAuthor("");
  };
  const deleteAuthor = (event) => {
    const authorToDelete = event.target.dataset.author;
    setFormAuthors((p) => p.filter((e) => e !== authorToDelete));
  };
  const authorsElements = formAuthors.map((a) => {
    return (
      <li key={a}>
        <p>{a}</p>
        <button data-author={a} onClick={deleteAuthor}></button>
      </li>
    );
  });
  return (
    <Modal isOpen={isOpenPopup} handleOnClose={hidePopup}>
      <div className="course-popup">
        <form className="course-popup__form" onSubmit={handleSubmit}>
          <div className="course-popup__form-row">
            <label>
              Author:
              <input
                type="text"
                value={formAuthor}
                className="course-popup__input"
                onChange={handleOnChangeAuthor}
              />
              <button onClick={addAuthor}>add author</button>
            </label>
          </div>
          <div className="course-popup__form-row">
            <label>
              Img url:
              <input
                type="text"
                value={formImg}
                onChange={handleOnChangeImg}
                className="course-popup__input"
              />
            </label>
          </div>
          <div className="course-popup__form-row">
            <label>
              Price:
              <input
                type="number"
                value={formPrice}
                onChange={handleOnChangePrice}
                className="course-popup__input"
              />
            </label>
          </div>
          <div className="course-popup__form-row">
            <label>
              Title:
              <input
                type="text"
                value={formTitle}
                onChange={handleOnChangeTitle}
                className="course-popup__input"
              />
            </label>
          </div>
          <button type="submit">Send</button>
          <button onClick={hidePopup}>Cancel</button>
        </form>
        <ul>
          <p>Authors list</p>
          {authorsElements}
        </ul>
      </div>
    </Modal>
  );
};

export default CoursePopup;
