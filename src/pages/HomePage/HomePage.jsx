import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";
import { useState } from "react";

const HomePage = ({}) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/catalog");
  };

  return (
    <section className={css.home_section}>
      <div className={css.overlay}>
        <div className={css.home_title_container}>
          <h1 className={css.home_title}>Campers of your dreams</h1>
          <p className={css.home_description}>
            You can find everything you want in our catalog
          </p>
        </div>
        <div className={css.container_btn}>
          <Button variant="viewNowButton" onClick={handleView}>
            View Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
