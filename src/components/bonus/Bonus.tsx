import fire from "../../assets/fire.svg";
import arrow from "../../assets/arrow.svg";
import "./index.css";

interface IBonusProps {
  loading: boolean;
  bonusName: string;
  current: number;
  burn: number;
  dateBurn: Date;
}

const Bonus = ({ loading, dateBurn, burn, bonusName }: IBonusProps) => {
  const formateDate = (value: Date) => {
    const day = value.getDate().toString().padStart(2, "0");
    const month = (value.getMonth() + 1).toString().padStart(2, "0");

    return `${day}.${month}`;
  };

  return (
    <>
      <div className="bonus">
        <div className="bonus__wrapper">
          <div className="bonus__info card">
            <div className="card__top">
              <h2 className="card__title">
                {bonusName ? bonusName : 300} бонусов
              </h2>
            </div>
            <div className="card__bottom">
              <p className="card__text">
                {formateDate(dateBurn)} сгорит
                <img className="card__fire-img" src={fire} alt="fire" /> {burn}{" "}
                бонусов
              </p>
            </div>
          </div>
          <div className="bonus__arrow">
            <button>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bonus;
