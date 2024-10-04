import css from "./AppBar.module.css";

const AppBar = ({}) => {
  return (
    <header className={css.header}>
      <img src="../../image/travelTrucks-logo.jpg" alt="logo" />
      {/* <p className={css.logo}>
        Travel<span className={css.logo_span}>Trucks</span>
      </p> */}
      <Navigation />
    </header>
  );
};

export default AppBar;
