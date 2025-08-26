import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header-container">
      <img src={LOGO_URL}></img>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
