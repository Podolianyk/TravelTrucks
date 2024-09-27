import clsx from "clsx";
import { FaStar } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import css from "./DetailTruckCard.module.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const DetailTruckCard = ({ truckId }) => {
  const reverseLocation = (loc) => {
    if (!loc) return "";
    const parts = loc.split(", ");
    return `${parts[1]}, ${parts[0]}`;
  };

  return (
    <div className={css.detail_main_container}>
      <div>
        <h3 className={css.detail_title}>{truckId.name}</h3>
        <div className={css.container}>
          <div className={css.detail_review_container}>
            <FaStar className={css.icon_review} />
            <p className={css.detail_review}>{`${truckId.rating}(${
              truckId.reviews ? truckId.reviews.length : 0
            } Reviews)`}</p>
          </div>
          <div className={css.detail_location_container}>
            <CiMap className={css.icon_location} />
            <p>
              {truckId.location
                ? reverseLocation(truckId.location)
                : "Location not available"}
            </p>
          </div>
        </div>
        <p className={css.detail_price}>{`€${truckId.price}`}</p>
      </div>
      <div>
        <ul className={css.detail_gallery_list}>
          {truckId.gallery &&
            truckId.gallery.map((image, index) => (
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
      <p className={css.detail_description}>{truckId.description}</p>
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
      <Outlet />
    </div>
  );
};

export default DetailTruckCard;
