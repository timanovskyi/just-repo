import "./Courses.scss";
import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "./subcomponents/course/Course";
import { getRandomImg } from "../../helpers/images";

const Courses = ({}) => {
  const { courses } = useContext(StoreContext);

  const coursesElements = courses.map((e) => (
    <Course key={e.id} {...e} img={getRandomImg()}></Course>
  ));
  return (
    <section className="courses">
      <h2 className="courses__title"></h2>
      <ul className="courses__list">{coursesElements}</ul>
    </section>
  );
};

export default Courses;
