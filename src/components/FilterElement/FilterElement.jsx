import css from "./FilterElement.module.css";
import { useState } from "react";

const FilterElement = ({ children }) => {
  return <button className={css.filterButton}>{children}</button>;
};

export default FilterElement;
