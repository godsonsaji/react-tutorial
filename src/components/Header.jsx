import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <img src={LOGO_URL}></img>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
