import { createSelector } from "@reduxjs/toolkit";

export const selectTrucks = (state) => state.trucks.items;
export const selectFilters = (state) => state.filtersTracks.filters;

export const selectFilterTrucks = createSelector(
  [selectTrucks, selectFilters],
  (items, filters) => {
    return items.filter((item) => {
      const {
        location,
        AC,
        automatic,
        kitchen,
        TV,
        bathroom,
        alcove,
        van,
        fullyIntegrated,
      } = filters;

      const matchesLocation = !location || item.location.includes(location);

      const matchesFilters =
        (!AC || item.AC) &&
        (!automatic || item.transmission === "automatic") &&
        (!kitchen || item.kitchen) &&
        (!TV || item.TV) &&
        (!bathroom || item.bathroom) &&
        (!alcove || item.alcove) &&
        (!van || item.van) &&
        (!fullyIntegrated || item.fullyIntegrated);

      return matchesLocation && matchesFilters;
    });
  }
);
