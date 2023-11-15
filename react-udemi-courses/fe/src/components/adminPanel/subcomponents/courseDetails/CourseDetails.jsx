import "./CourseDetails.scss";
import { useContext, useState } from "react";
import request from "../../../../helpers/request";
import { StoreContext } from "../../../../store/StoreProvider";
import CoursePopup from "../coursePopup/CoursePopup";

const CourseDetails = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const { setCourses } = useContext(StoreContext);
  const { title, id } = props;
  const handleShowPopup = () => setIsOpenPopup(true);
  const handleHidPopup = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpenPopup(false);
  };

  const handleDeleteCourse = async () => {
    try {
      const { status } = await request.delete(`/courses/${id}`);

      if (status === 200) {
        setCourses((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <details className="course-details">
      <summary>{title}</summary>
      <button onClick={handleShowPopup}>Edit</button>
      <button onClick={handleDeleteCourse}>Delete</button>

      <CoursePopup
        {...props}
        hidePopup={handleHidPopup}
        isOpenPopup={isOpenPopup}
      ></CoursePopup>
    </details>
  );
};

export default CourseDetails;
