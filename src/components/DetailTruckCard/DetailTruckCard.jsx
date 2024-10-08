import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { FaStar } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import { Bars } from "react-loader-spinner";
import css from "./DetailTruckCard.module.css";
import { Suspense } from "react";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const DetailTruckCard = ({ truck }) => {
  const reverseLocation = (loc) => {
    if (!loc) return "";
    const parts = loc.split(", ");
    return `${parts[1]}, ${parts[0]}`;
  };

  return (
    <div className={css.detail_main_container}>
      <div>
        <h3 className={css.detail_title}>{truck.name}</h3>
        <div className={css.container}>
          <div className={css.detail_review_container}>
            <FaStar className={css.icon_review} />
            <p className={css.detail_review}>{`${truck.rating}(${
              truck.reviews ? truck.reviews.length : 0
            } Reviews)`}</p>
          </div>
          <div className={css.detail_location_container}>
            <CiMap className={css.icon_location} />
            <p>
              {truck.location
                ? reverseLocation(truck.location)
                : "Location not available"}
            </p>
          </div>
        </div>
        <p className={css.detail_price}>{`€${truck.price
          .toFixed(2)
          .replace(".", ",")}`}</p>
      </div>
      <div>
        <ul className={css.detail_gallery_list}>
          {truck.gallery &&
            truck.gallery.map((image, index) => (
              <li className={css.detail_image_item} key={index}>
                <img
                  className={css.detail_image}
                  src={image.thumb}
                  alt={`Truck image ${index + 1}`}
                />
              </li>
            ))}
        </ul>
      </div>
      <p className={css.detail_description}>{truck.description}</p>
      <ul className={css.detail_nav}>
        <li>
          <NavLink className={getLinkClass} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense
        fallback={
          <div className={css.loader}>
            <Bars
              height="80"
              width="80"
              color="#7277e3"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DetailTruckCard;
