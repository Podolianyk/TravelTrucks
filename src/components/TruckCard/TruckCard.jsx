import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import { PiWindLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { MdOutlineTv } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { HiOutlineViewGrid } from "react-icons/hi";
import { TbHierarchy2 } from "react-icons/tb";
import { GiMechanicalArm } from "react-icons/gi";

import Button from "../Button/Button";
import css from "./TruckCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedTrucks } from "../../redux/selectedTracks/selectors";
import {
  addTruckToSelect,
  removeTruckFromSelect,
} from "../../redux/selectedTracks/slice";

const TruckCard = ({
  name,
  gallery,
  price,
  id,
  reviews,
  location,
  description,
  rating,
  AC,
  transmission,
  kitchen,
  TV,
  bathroom,
  alcove,
  van,
  fullyIntegrated,
}) => {
  const dispatch = useDispatch();
  const selectedTrucks = useSelector(selectSelectedTrucks);

  const isTruckSelected = selectedTrucks.some((truck) => truck.id === id);

  const handleAddTruck = () => {
    if (isTruckSelected) {
      dispatch(removeTruckFromSelect(id));
    } else {
      dispatch(
        addTruckToSelect({
          name,
          gallery,
          price,
          id,
          reviews,
          location,
          description,
          rating,
          AC,
          transmission,
          kitchen,
          TV,
          bathroom,
          alcove,
          van,
          fullyIntegrated,
        })
      );
    }
  };

  const navigate = useNavigate();
  const handleOpenDetailPage = () => {
    navigate(`${id}`);
  };

  return (
    <div className={css.truckCard_container}>
      <div className={css.truckCard_image_container}>
        <img
          className={css.truckCard_image}
          src={gallery[0].original}
          alt={name}
        />
      </div>
      <div className={css.truckCard_info_container}>
        <div>
          <div className={css.truckCard_name_with_price_container}>
            <h3 className={css.truckCard_title}>{name}</h3>
            <div className={css.truckCard_favourite_container}>
              <p className={css.truckCard_price}>{`€${price
                .toFixed(2)
                .replace(".", ",")}`}</p>
              <button
                className={css.truckCard_favourite_btn}
                onClick={handleAddTruck}
              >
                <CiHeart
                  className={css.icon_favourite}
                  style={{
                    color: isTruckSelected ? "#E44848" : "#101828",
                  }}
                />
              </button>
            </div>
          </div>
          <div className={css.truckCard_review_with_location_container}>
            <div className={css.truckCard_review_container}>
              <FaStar className={css.icon_review} />
              <p>{`${rating} (${reviews.length} Reviews)`}</p>
            </div>
            <div className={css.truckCard_location_container}>
              <CiMap className={css.icon_location} />
              <p>{location}</p>
            </div>
          </div>
          <p className={css.truckCard_description}>{description}</p>
          <div className={css.properties_container}>
            {AC && (
              <div className={css.div_properties}>
                <PiWindLight className={css.icon} />
                <p>AC</p>
              </div>
            )}
            <div>
              {transmission === "automatic" && (
                <div className={css.div_properties}>
                  <TbHierarchy2 className={css.icon} />
                  <p>Automatic</p>
                </div>
              )}
              {transmission === "manual" && (
                <div className={css.div_properties}>
                  <GiMechanicalArm className={css.icon} />
                  <p>Manual</p>
                </div>
              )}
            </div>
            {kitchen && (
              <div className={css.div_properties}>
                <BsCupHot className={css.icon} />
                <p>Kitchen</p>
              </div>
            )}
            {TV && (
              <div className={css.div_properties}>
                <MdOutlineTv className={css.icon} />
                <p>TV</p>
              </div>
            )}
            {bathroom && (
              <div className={css.div_properties}>
                <BsDroplet className={css.icon} />
                <p>Bathroom</p>
              </div>
            )}
            {alcove && (
              <div className={css.div_properties}>
                <MdOutlineAutoAwesomeMosaic className={css.icon} />
                <p>Alcove</p>
              </div>
            )}
            {van && (
              <div className={css.div_properties}>
                <HiOutlineViewGrid className={css.icon} />
                <p>Van</p>
              </div>
            )}
            {fullyIntegrated && (
              <div className={css.div_properties}>
                <TiThSmallOutline className={css.icon} />
                <p>FullyIntegrated</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <Button variant="showMoreButton" onClick={handleOpenDetailPage}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
