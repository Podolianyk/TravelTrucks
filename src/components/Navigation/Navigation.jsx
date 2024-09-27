import clsx from "clsx";
import css from "./Navigation.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = ({}) => {
  return (
    <nav>
      <ul className={css.nav_list}>
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={getLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
