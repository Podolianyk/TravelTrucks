import AppBar from "../AppBar/AppBar";
import css from "./Loyaut.module.css";
import { useState } from "react";

const Loyaut = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

export default Loyaut;
