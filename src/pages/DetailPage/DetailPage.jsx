import { useParams } from "react-router-dom";
import { useState } from "react";
import DetailTruckCard from "../../components/DetailTruckCard/DetailTruckCard";
import css from "./DetailPage.module.css";
import { selectTrucks } from "../../redux/trucks/selectors";
import { useSelector } from "react-redux";

const DetailPage = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const allTrucks = useSelector(selectTrucks);
  const truck = allTrucks.find((truck) => truck.id === id);
  // console.log(truck);

  return (
    <div className={css.detail_page_container}>
      {isLoading && <p>Loading information, please wait...</p>}
      {isError && <p>Oops! There was an error! Try reloading!</p>}
      {truck && <DetailTruckCard truck={truck} />}
    </div>
  );
};

export default DetailPage;
