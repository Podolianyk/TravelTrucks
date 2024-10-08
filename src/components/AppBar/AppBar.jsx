import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { Toaster } from "react-hot-toast";
import logo from "../../image/travelTrucks-logo.png";

const AppBar = ({}) => {
  return (
    <header className={css.header}>
      <div className={css.header_div}>
        <div className={css.img_div}>
          <img className={css.logo} src={logo} alt="logo" />
        </div>
        <Navigation />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default AppBar;
