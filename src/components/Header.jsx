import "../css/header.css";
import deliverooLogo from "../assets/img/logo-teal.svg";

const Header = ({
  restaurantName,
  restaurantDescription,
  restaurantPicture,
}) => {
  return (
    <header>
      <div className="topbar">
        <div className="topbarContainer headerContainer">
          <img src={deliverooLogo} alt="Deliveroo Logo" />
        </div>
      </div>

      <div className="restaurantInfos">
        <div className="restaurantInfosContainer headerContainer">
          <div className="restaurantInfosText">
            <h1>{restaurantName}</h1>
            <p>{restaurantDescription}</p>
          </div>
          <img src={restaurantPicture} alt="Restaurant picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
