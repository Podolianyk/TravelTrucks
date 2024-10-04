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
      state.filters = action.payload;
      console.log(state.filters);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setFilters, setItems } = filteredSlice.actions;

export default filteredSlice.reducer;
