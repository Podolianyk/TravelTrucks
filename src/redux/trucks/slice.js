import { createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "../trucks/operations";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrucks.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getTrucks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getTrucks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default trucksSlice.reducer;
