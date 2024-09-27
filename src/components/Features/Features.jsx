import FeaturesCard from "../FeaturesCard/FeaturesCard";
import ReservationForm from "../ReservationForm/ReservationForm";
import css from "./Features.module.css";
import { useState } from "react";

const Features = ({}) => {
  return (
    <div className={css.features_container}>
      <FeaturesCard />
      <ReservationForm />
    </div>
  );
};

export default Features;
