import warning from "../../assets/warning.svg";
import "./index.css";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Логотип</h1>
      <div className="header__warning">
        <img src={warning} alt="warning" />
      </div>
    </header>
  );
};

export default Header;
