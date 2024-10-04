import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selectedTracks",
  initialState: {
    items: [],
  },
  reducers: {
    addTruckToSelect: (state, action) => {
      const truck = action.payload;
      const isAlreadyAdded = state.items.find((item) => item.id === truck.id);
      if (!isAlreadyAdded) {
        state.items.push(truck);
      }
    },
    removeTruckFromSelect: (state, action) => {
      state.items = state.items.filter((truck) => truck.id !== action.payload);
    },
  },
});

export const { addTruckToSelect, removeTruckFromSelect } =
  selectedSlice.actions;

export default selectedSlice.reducer;
