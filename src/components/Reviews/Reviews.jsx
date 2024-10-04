import { useParams } from "react-router-dom";
import { getTrucksById } from "../../trucks-api";
import ReservationForm from "../ReservationForm/ReservationForm";
import css from "./Reviews.module.css";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = ({}) => {
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
    <div className={css.reviews_container}>
      {isLoading && <p>Loading information, please wait...</p>}
      {isError && <p>Oops! There was an error! Try reloading!</p>}
      {truckId && <ReviewCard truckId={truckId} />}
      {truckId && <ReservationForm truckId={truckId} />}
    </div>
  );
};

export default Reviews;
