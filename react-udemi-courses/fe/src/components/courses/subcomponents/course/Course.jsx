import "./Course.scss";
import React from "react";

const Course = ({ authors, title, price, img }) => {
  const allAuthors = authors.join(", ");

  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <img src={img} alt={title} className="card__image" />
      <p className="card__autors">{`Authors: ${allAuthors}`}</p>
      <p className="card__price">{`Price: ${price}`}</p>
    </article>
  );
};

export default Course;
