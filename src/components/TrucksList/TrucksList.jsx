import Button from "../Button/Button";
import TruckCard from "../TruckCard/TruckCard";
import css from "./TrucksList.module.css";
import { useState } from "react";

const TrucksList = ({ trucks }) => {
  const [visibleTrucksCount, setVisibleTrucksCount] = useState(4);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setVisibleTrucksCount(visibleTrucksCount + 4);
    setPage(page + 1);
  };

  if (trucks.length === 0) {
    return <p>No trucks found for the selected filters.</p>; // Додайте повідомлення, якщо немає вантажів
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
