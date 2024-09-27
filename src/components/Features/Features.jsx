import { useParams } from "react-router-dom";
import { getTrucks, getTrucksById } from "../../trucks-api";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import ReservationForm from "../ReservationForm/ReservationForm";
import css from "./Features.module.css";
import { useEffect, useState } from "react";

const Features = ({}) => {
  const [truckId, setTruckId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getDataOfTrack = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getTrucksById(id);
        // console.log(data);
        setTruckId(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getDataOfTrack();
  }, [id]);

  return (
    <div className={css.features_container}>
      {isLoading && <p>Loading information, please wait...</p>}
      {isError && <p>Oops! There was an error! Try reloading!</p>}
      {truckId && <FeaturesCard truckId={truckId} />}
      {truckId && <ReservationForm truckId={truckId} />}
    </div>
  );
};

export default Features;
