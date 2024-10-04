import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { useState } from "react";

const NotFoundPage = ({}) => {
  return (
    <div className={css.message_container}>
      <p className={css.description}>
        Sorry, page not found! Please go to{" "}
        <Link to="/" className={css.link}>
          Home
        </Link>
        !
      </p>
    </div>
  );
};

export default NotFoundPage;
