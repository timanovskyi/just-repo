import "./Content.scss";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import { ADMIN_TYPE } from "../../models";
import Courses from "../courses/Courses";

const Content = ({}) => {
  const { user } = useContext(StoreContext);
  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;
  return (
    <main className="content">
      <Routes>
        <Route exaxt path="/" element={<Courses />}></Route>
        {isUserLogged && (
          <Route exaxt path="/my-courses" element={<p>My C</p>}></Route>
        )}
        {isAdmin && (
          <Route
            exaxt
            path="/manage-courses"
            element={<p>Manage Courses</p>}
          ></Route>
        )}
        {/*<Navigate to=""></Navigate>*/}
      </Routes>
    </main>
  );
};

export default Content;
