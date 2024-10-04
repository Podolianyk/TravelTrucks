import css from "./FilterElement.module.css";
import clsx from "clsx";
import { BsDroplet } from "react-icons/bs";

const FilterElement = ({ Icon = BsDroplet, text, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(css.filterButton, active && css.active)}
    >
      <Icon className={ css.icon} />
      <p>{text}</p>
    </div>
  );
};

export default FilterElement;
