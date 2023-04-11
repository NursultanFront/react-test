import fire from "../../assets/fire.svg";
import arrow from "../../assets/arrow.svg";
import "./index.css";
import { BonusResult } from "../../api/types";
import Spinner from "../../assets/Spinner";

type BonusData = BonusResult["data"];

interface IBonusProps {
  loading?: boolean;
  bonusData: BonusData;
}

const Bonus = ({ loading, bonusData }: IBonusProps) => {
  return (
    <>
      <div className="bonus">
        <div className="bonus__wrapper">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <ViewBonus bonusData={bonusData}></ViewBonus>
          )}
        </div>
      </div>
    </>
  );
};

const ViewBonus = ({ bonusData }: IBonusProps) => {
  const formateDate = (value: string) => {
    const dateObj = new Date(value);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");

    return `${day}.${month}`;
  };

  return (
    <>
      <div className="bonus__info card">
        <div className="card__top">
          <h2 className="card__title">{bonusData.currentQuantity} бонусов</h2>
        </div>
        <div className="card__bottom">
          <p className="card__text">
            {formateDate(bonusData.dateBurning)} сгорит
            <img className="card__fire-img" src={fire} alt="fire" />{" "}
            {bonusData.forBurningQuantity} бонусов
          </p>
        </div>
      </div>
      <div className="bonus__arrow">
        <button>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default Bonus;
