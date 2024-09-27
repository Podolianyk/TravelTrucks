import css from "./NotFoundPage.module.css";
import { useState } from "react";

const NotFoundPage = ({}) => {
  return (
    <div className={css.message}>
      <p>
        Sorry, page not found! Please go to <Link to="/">Home</Link>!
      </p>
    </div>
  );
};

export default NotFoundPage;
