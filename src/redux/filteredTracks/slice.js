import { createSlice } from "@reduxjs/toolkit";

const filteredSlice = createSlice({
  name: "filter",
  initialState: {
    items: [],
    filters: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
      alcove: false,
      van: false,
      fullyIntegrated: false,
      location: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      console.log("setFilters");
      console.log(action.payload);
      state.filters = action.payload; // Зберігаємо нові фільтри
    },
    setItems: (state, action) => {
      console.log("setItems");
      state.items = action.payload; // Завантаження всіх елементів
    },
    filterItems: (state) => {},
  },
});

export const { setFilters, setItems, filterItems } = filteredSlice.actions;

export default filteredSlice.reducer;
