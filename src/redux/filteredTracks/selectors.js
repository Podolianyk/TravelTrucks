export const selectFilterTrucks = (state) => {
  const items = state.trucks.items.filter((item) => {
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
    } = state.filtersTracks.filters;

    // Фільтрація за локацією
    const matchesLocation = !location || item.location.includes(location);

    // Фільтрація за іншими властивостями
    const matchesFilters =
      (!AC || item.AC) &&
      (!automatic || item.automatic) &&
      (!kitchen || item.kitchen) &&
      (!TV || item.TV) &&
      (!bathroom || item.bathroom) &&
      (!alcove || item.alcove) &&
      (!van || item.van) &&
      (!fullyIntegrated || item.fullyIntegrated);

    return matchesLocation && matchesFilters;
  });
  return items;
};

export const selectFilters = (state) => state.filtersTracks.filters;
