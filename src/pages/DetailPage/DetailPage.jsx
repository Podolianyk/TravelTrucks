import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrucksById } from "../../trucks-api";
import DetailTruckCard from "../../components/DetailTruckCard/DetailTruckCard";
import css from "./DetailPage.module.css";

const DetailPage = ({}) => {
  const [truckId, setTruckId] = useState({});
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
    <div className={css.detail_page_container}>
      {isLoading && <p>Loading information, please wait...</p>}
      {isError && <p>Oops! There was an error! Try reloading!</p>}
      {truckId && <DetailTruckCard truckId={truckId} />}
    </div>
  );
};

export default DetailPage;
