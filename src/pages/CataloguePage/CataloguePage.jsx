import { useDispatch } from "react-redux";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import TrucksList from "../../components/TrucksList/TrucksList";
import css from "./CataloguePage.module.css";
import { useEffect } from "react";
import { getTrucks } from "../../redux/trucks/operations.js";

const CataloguePage = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  return (
    <div className={css.cataloguePage_container}>
      <FilterSidebar />
      <TrucksList />
    </div>
  );
};

export default CataloguePage;
