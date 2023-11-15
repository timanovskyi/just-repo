import "./UserCourses.scss";
import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "../course/Course";
import { getRandomImg } from "../../helpers/images";

const UserCourses = () => {
  const { user, courses } = useContext(StoreContext);

  const coursesElements = courses
    .filter((c) => user.courses.includes(c.id))
    .map((e) => (
      <Course
        isUserContext={true}
        key={e.id}
        {...e}
        img={getRandomImg()}
      ></Course>
    ));
  return (
    <section className="user-courses">
      <h2 className="user-courses__title">Your purchased courses</h2>
      <ul className="user-courses__list">{coursesElements}</ul>
    </section>
  );
};

export default UserCourses;
