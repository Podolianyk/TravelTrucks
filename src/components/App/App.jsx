import css from "./App.module.css";
import { useState } from "react";
import ReservationForm from "../ReservationForm/ReservationForm";

const App = ({}) => {
  const handleNewOrder = (newOrder) => {
    console.log(newOrder);
  };

  return (
    <div>
      <ReservationForm onReservation={handleNewOrder} />
    </div>
  );
};

export default App;
