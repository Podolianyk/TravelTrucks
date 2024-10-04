import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getTrucks = createAsyncThunk(
  "trucks/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
