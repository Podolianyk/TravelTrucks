import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import { PiWindLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { MdOutlineTv } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { SiMixcloud } from "react-icons/si";
import { RiGasStationFill } from "react-icons/ri";
import { GiWaterfall } from "react-icons/gi";
import { LuRefrigerator } from "react-icons/lu";
import { GiGasStove } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { FaRadio } from "react-icons/fa6";
import { TbHierarchy2 } from "react-icons/tb";
import { GiMechanicalArm } from "react-icons/gi";
import css from "./FeaturesCard.module.css";

const FeaturesCard = ({ truckId }) => {
  return (
    <div className={css.features_card_container}>
      <div className={css.properties_container}>
        {truckId.transmission === "automatic" && (
          <div className={css.div_properties}>
            <TbHierarchy2 className={css.icon} />
            <p>Automatic</p>
          </div>
        )}
        {truckId.transmission === "manual" && (
          <div className={css.div_properties}>
            <GiMechanicalArm className={css.icon} />
            <p>Manual</p>
          </div>
        )}

        {truckId.engine === "diese" && (
          <div className={css.div_properties}>
            <BsFuelPumpDiesel className={css.icon} />
            <p>Diese</p>
          </div>
        )}
        {truckId.engine === "hybrid" && (
          <div className={css.div_properties}>
            <SiMixcloud className={css.icon} />
            <p>Hybrid</p>
          </div>
        )}
        {truckId.engine === "petrol" && (
          <div className={css.div_properties}>
            <RiGasStationFill className={css.icon} />
            <p>Petrol</p>
          </div>
        )}

        {truckId.AC && (
          <div className={css.div_properties}>
            <PiWindLight className={css.icon} />
            <p>AC</p>
          </div>
        )}

        {truckId.bathroom && (
          <div className={css.div_properties}>
            <BsDroplet className={css.icon} />
            <p>Bathroom</p>
          </div>
        )}

        {truckId.kitchen && (
          <div className={css.div_properties}>
            <BsCupHot className={css.icon} />
            <p>Kitchen</p>
          </div>
        )}

        {truckId.TV && (
          <div className={css.div_properties}>
            <MdOutlineTv className={css.icon} />
            <p>TV</p>
          </div>
        )}

        {truckId.radio && (
          <div className={css.div_properties}>
            <FaRadio className={css.icon} />
            <p>Radio</p>
          </div>
        )}

        {truckId.refrigerator && (
          <div className={css.div_properties}>
            <LuRefrigerator className={css.icon} />
            <p>Refrigerator</p>
          </div>
        )}

        {truckId.microwave && (
          <div className={css.div_properties}>
            <MdOutlineMicrowave className={css.icon} />
            <p>Microwave</p>
          </div>
        )}

        {truckId.gas && (
          <div className={css.div_properties}>
            <GiGasStove className={css.icon} />
            <p>Gas</p>
          </div>
        )}

        {truckId.water && (
          <div className={css.div_properties}>
            <GiWaterfall className={css.icon} />
            <p>Water</p>
          </div>
        )}
      </div>

      <div className={css.main_container}>
        <h3 className={css.features_card_title}>Vehicle details</h3>
        {truckId.form && (
          <div className={css.container}>
            <p>Form</p>
            <p>{truckId.form}</p>
          </div>
        )}
        {truckId.length && (
          <div className={css.container}>
            <p>Length</p>
            <p>{truckId.length}</p>
          </div>
        )}
        {truckId.width && (
          <div className={css.container}>
            <p>Width</p>
            <p>{truckId.width}</p>
          </div>
        )}
        {truckId.height && (
          <div className={css.container}>
            <p>Height</p>
            <p>{truckId.height}</p>
          </div>
        )}
        {truckId.tank && (
          <div className={css.container}>
            <p>Tank</p>
            <p>{truckId.tank}</p>
          </div>
        )}
        {truckId.consumption && (
          <div className={css.container}>
            <p>Consumption</p>
            <p>{truckId.consumption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesCard;
