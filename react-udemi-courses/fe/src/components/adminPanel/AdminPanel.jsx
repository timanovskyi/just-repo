import "./AdminPanel.scss";
import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import CourseDetails from "./subcomponents/courseDetails/CourseDetails";
import CoursePopup from "./subcomponents/coursePopup/CoursePopup";

const AdminPanel = ({}) => {
  const { courses } = useContext(StoreContext);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const handleShowPopup = () => setIsOpenPopup(true);
  const handleHidPopup = (e) => {
    e.preventDefault();
    setIsOpenPopup(false);
  };
  const elements = courses.map((c) => (
    <CourseDetails key={c.id} {...c}></CourseDetails>
  ));
  return (
    <section className="admin-panel">
      {elements}
      <button onClick={handleShowPopup}>Add new course</button>
      <CoursePopup
        isEditMode={false}
        isOpenPopup={isOpenPopup}
        hidePopup={handleHidPopup}
      ></CoursePopup>
    </section>
  );
};

export default AdminPanel;
