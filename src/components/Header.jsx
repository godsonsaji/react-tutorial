import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <img src={LOGO_URL}></img>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
