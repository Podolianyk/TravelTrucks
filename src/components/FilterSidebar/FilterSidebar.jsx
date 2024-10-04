import { useEffect, useId, useState } from "react";
import { PiWindLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { MdOutlineTv } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { TbHierarchy2 } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";
import { HiOutlineViewGrid } from "react-icons/hi";
import FilterElement from "../FilterElement/FilterElement";
import Button from "../Button/Button";
import { CiMap } from "react-icons/ci";
import css from "./FilterSidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors";
import { setFilters } from "../../redux/filteredTracks/slice";

const FilterSidebar = () => {
  const [uniqueLocation, setUniqueLocation] = useState([]);

  const dispatch = useDispatch();
  const selectId = useId();
  const [location, setLocation] = useState("");
  const [filters, setLocalFilters] = useState({
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    alcove: false,
    van: false,
    fullyIntegrated: false,
  });

  const allTrucks = useSelector(selectTrucks);

  useEffect(() => {
    const uniqueLocationTemp = [];
    allTrucks.forEach((item) => {
      const city = item.location.split(", ").pop();

      if (!uniqueLocationTemp.includes(city)) {
        uniqueLocationTemp.push(city);
      }
    });
    setUniqueLocation(uniqueLocationTemp);
  }, [allTrucks]);

  const handleCheckboxChange = (filter) => {
    const copy = { ...filters, [filter]: !filters[filter] };
    setLocalFilters(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters({ ...filters, location }));
  };

  return (
    <div className={css.filter_sidebar_container}>
      <form onSubmit={handleSubmit}>
        <div className={css.locationForm_container}>
          <label className={css.locationForm_label} htmlFor={selectId}>
            Location
            <div className={css.select_wrapper}>
              <CiMap className={css.select_icon} />

              <select
                className={css.locationForm_select}
                id={selectId}
                name="Location"
                value={location}
                onChange={(evt) => {
                  setLocation(evt.target.value);
                }}
              >
                <option value="">City</option>
                {uniqueLocation.map((loc, index) => (
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
              <FilterElement
                onClick={() => handleCheckboxChange("AC")}
                active={filters.AC}
                Icon={PiWindLight}
                text="AC"
              ></FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("automatic")}
                active={filters.automatic}
                Icon={TbHierarchy2}
                text="Automatic"
              ></FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("kitchen")}
                active={filters.kitchen}
                Icon={BsCupHot}
                text="Kitchen"
              ></FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("TV")}
                active={filters.TV}
                Icon={MdOutlineTv}
                text="TV"
              ></FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("bathroom")}
                active={filters.bathroom}
                Icon={BsDroplet}
                text="Bathroom"
              ></FilterElement>
            </div>
          </div>
          <div className={css.filtersForm_container}>
            <div className={css.filtersForm_title_container}>
              <h3 className={css.filtersForm_title}>Vehicle type</h3>
            </div>
            <div className={css.filterElement_boxes}>
              <FilterElement
                onClick={() => handleCheckboxChange("van")}
                active={filters.van}
                Icon={MdOutlineAutoAwesomeMosaic}
                text="Van"
              ></FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("fullyIntegrated")}
                active={filters.fullyIntegrated}
                Icon={HiOutlineViewGrid}
                text="Fully Integrated"
              ></FilterElement>
              <FilterElement
                onClick={() => handleCheckboxChange("alcove")}
                active={filters.alcove}
                Icon={TiThSmallOutline}
                text="Alcove"
              ></FilterElement>
            </div>
          </div>
          <Button variant="searchButton" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterSidebar;
