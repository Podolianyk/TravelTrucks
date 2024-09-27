import { useId, useState } from "react";
import { PiWindLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { MdOutlineTv } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { HiOutlineViewGrid } from "react-icons/hi";
import FilterElement from "../FilterElement/FilterElement";
import Button from "../Button/Button";
import { CiMap } from "react-icons/ci";
import css from "./FilterSidebar.module.css";

const FilterSidebar = ({ locations, onFilter }) => {
  const selectId = useId();
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    alcove: false,
    van: false,
    fullyIntegrated: false,
  });

  const handleCheckboxChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ location, ...filters });
  };

  return (
    <div className={css.filter_sidebar_container}>
      <form onSubmit={handleSubmit}>
        <div className="css.locationForm_container">
          <label className={css.locationForm_label} htmlFor={selectId}>
            Location
            <div className={css.select_wrapper}>
              <CiMap className={css.select_icon} />

              <select
                className={css.locationForm_select}
                id={selectId}
                name="Location"
                value={location}
                onChange={(evt) => setLocation(evt.target.value)}
              >
                <option value="">City</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {`${loc}, Ukraine`}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <div>
          <h2 className={css.filtersForm_main_title}>Filters</h2>
          <div className={css.filtersForm_container}>
            <div className={css.filtersForm_title_container}>
              <h3 className={css.filtersForm_title}>Vehicle equipment</h3>
            </div>
            <div className={css.filterElement_boxes}>
              <FilterElement onClick={() => handleCheckboxChange("AC")}>
                <PiWindLight className={css.icon} />
                <p>AC</p>
              </FilterElement>
              <FilterElement onClick={() => handleCheckboxChange("automatic")}>
                <PiWindLight className={css.icon} />
                <p>Automatic</p>
              </FilterElement>
              <FilterElement onClick={() => handleCheckboxChange("kitchen")}>
                <BsCupHot className={css.icon} />
                <p>Kitchen</p>
              </FilterElement>
              <FilterElement onClick={() => handleCheckboxChange("TV")}>
                <MdOutlineTv className={css.icon} />
                <p>TV</p>
              </FilterElement>
              <FilterElement onClick={() => handleCheckboxChange("bathroom")}>
                <BsDroplet className={css.icon} />
                <p>Bathroom</p>
              </FilterElement>
            </div>
          </div>
          <div className={css.filtersForm_container}>
            <div className={css.filtersForm_title_container}>
              <h3 className={css.filtersForm_title}>Vehicle type</h3>
            </div>
            <div className={css.filterElement_boxes}>
              <FilterElement onClick={() => handleCheckboxChange("van")}>
                <MdOutlineAutoAwesomeMosaic className={css.icon} />
                <p>Van</p>
              </FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("fullyIntegrated")}
              >
                <HiOutlineViewGrid className={css.icon} />
                <p>Fully Integrated</p>
              </FilterElement>
              <FilterElement onClick={() => handleCheckboxChange("alcove")}>
                <TiThSmallOutline className={css.icon} />
                <p>Alcove</p>
              </FilterElement>
            </div>
          </div>
          <Button
            variant="searchButton"
            // onClick={() => console.log("Searched")}
            type="submit"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterSidebar;
