import axios from "axios";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getTrucks = async () => {
  const response = await axios.get(
    "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
  );
  // console.log(response.data.items);
  return response.data.items;
};

export const getTrucksById = async (id) => {
  const response = await axios.get(
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
  );
  // console.log(response.data);
  return response.data;
};
