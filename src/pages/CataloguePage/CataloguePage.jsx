import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import TrucksList from "../../components/TrucksList/TrucksList";
import { getTrucks } from "../../trucks-api.js";
import css from "./CataloguePage.module.css";
import { useEffect, useState } from "react";

const CataloguePage = ({}) => {
  const [uniqueLocation, setUniqueLocation] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [filteredTrucks, setFilteredTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getTrucks();
        console.log(data);
        setTrucks(data);
        setFilteredTrucks(data);

        const uniqueLocationTemp = [];
        data.forEach((item) => {
          const city = item.location.split(", ").pop();

          if (!uniqueLocationTemp.includes(city)) {
            uniqueLocationTemp.push(city);
          }
        });
        setUniqueLocation(uniqueLocationTemp);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleFilter = (filters) => {
    const { location, ...selectedFilters } = filters;

    const filtered = trucks.filter((truck) => {
      const matchesLocation = location
        ? truck.location.includes(location)
        : true;

      const matchesEquipment = Object.entries(selectedFilters).every(
        ([key, value]) => {
          return !value || truck.equipment.includes(key); // Припускаємо, що truck.equipment - це масив з назвами обладнання
        }
      );

      return matchesLocation && matchesEquipment;
    });

    setFilteredTrucks(filtered);
  };

  return (
    <div className={css.cataloguePage_container}>
      {isLoading && <p>Loading information, please wait...</p>}
      {isError && <p>Oops! There was an error! Try reloading!</p>}
      <FilterSidebar locations={uniqueLocation} onFilter={handleFilter} />
      {/* <TrucksList trucks={trucks} /> */}
      <TrucksList trucks={filteredTrucks} />
    </div>
  );
};

export default CataloguePage;
