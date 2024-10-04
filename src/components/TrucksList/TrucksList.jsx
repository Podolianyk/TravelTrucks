import { useSelector } from "react-redux";
import Button from "../Button/Button";
import TruckCard from "../TruckCard/TruckCard";
import css from "./TrucksList.module.css";
import { useState } from "react";
import { selectFilterTrucks } from "../../redux/filteredTracks/selectors";

const TrucksList = () => {
  const [visibleTrucksCount, setVisibleTrucksCount] = useState(4);
  const [page, setPage] = useState(1);

  // const filteredItems = useSelector(selectFilterTrucks);

  const trucks = useSelector(selectFilterTrucks);
  // console.log(trucks);

  const handleLoadMore = () => {
    setVisibleTrucksCount(visibleTrucksCount + 4);
    setPage(page + 1);
  };

  if (trucks.length === 0) {
    return (
      <div className={css.no_trucks_container}>
        <p className={css.description}>
          No trucks found for the selected filters.
        </p>
      </div>
    ); // Додайте повідомлення, якщо немає вантажів
  }

  return (
    <div>
      <ul className={css.trucks_list}>
        {trucks.slice(0, visibleTrucksCount).map((truck) => (
          <li className={css.trucks_list_item} key={truck.id}>
            <TruckCard
              name={truck.name}
              gallery={truck.gallery}
              price={truck.price}
              id={truck.id}
              reviews={truck.reviews}
              location={truck.location}
              description={truck.description}
              rating={truck.rating}
              AC={truck.AC}
              transmission={truck.transmission}
              kitchen={truck.kitchen}
              TV={truck.TV}
              bathroom={truck.bathroom}
              alcove={truck.alcove}
              van={truck.van}
              fullyIntegrated={truck.fullyIntegrated}
            />
          </li>
        ))}
      </ul>
      {visibleTrucksCount < trucks.length && (
        <div className={css.btn}>
          <Button variant="loadMoreButton" onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default TrucksList;
