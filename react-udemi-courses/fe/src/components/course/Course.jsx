import "./Course.scss";
import React, { useContext } from "react";
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";
import { useNavigate } from "react-router-dom";

const Course = ({ id, authors, title, price, img, isUserContext }) => {
  const { user, setUser } = useContext(StoreContext);
  const allAuthors = authors.join(", ");
  const navigate = useNavigate();
  const isUserLogged = Boolean(user);
  const handleOnclick = async () => {
    try {
      const { data, status } = await request.patch("/users", {
        login: user.login,
        courseId: id,
      });

      if (status === 200) {
        setUser(data.user);
        navigate("/my-courses");
      }
    } catch (e) {
      console.warn(e);
    }
  };

  const shouldBeByButtonVisible = isUserLogged && !isUserContext;
  return (
    <li>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img src={img} alt={title} className="card__image" />
        <p className="card__autors">{`Authors: ${allAuthors}`}</p>
        <p className="card__price">{`Price: ${price}`}</p>
        {shouldBeByButtonVisible && (
          <button onClick={handleOnclick}>Buy this course</button>
        )}
      </article>
    </li>
  );
};

export default Course;
