import clsx from "clsx";
import css from "./Button.module.css";
import { useState } from "react";

const Button = ({ children, type = "button", onClick, variant }) => {
  return (
    <button
      type={type}
      className={clsx(
        css.button,
        variant === "sendButton" && css.sendButton,
        variant === "showMoreButton" && css.showMoreButton,
        variant === "searchButton" && css.searchButton,
        variant === "loadMoreButton" && css.loadMoreButton,
        variant === "viewNowButton" && css.viewNowButton
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
