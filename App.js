import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <img src="https://cdn.dribbble.com/userupload/9902999/file/original-de06ad0905f8f51f1e1d0adbf2c4e538.jpg?resize=400x300"></img>
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

const ResCard = () => {
  return (
    <div className="card-container">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/13/bc2c70e1-fbb9-4fe8-92e3-273053238af7_c406b758-525b-40ef-aa5b-02f6fd92f9e0.JPG"></img>
      <div className="text-container">
        <h1 className="card-title">Asife Biriyani</h1>
        <span className="rating">4.6 Ratings</span>
        <span className="time">20-25 Minutes</span>
        <h3 className="cuisines">Chinese, Biriyani</h3>
        <h3 className="location">Eanchakkal</h3>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text-box" placeholder="Biriyani"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
