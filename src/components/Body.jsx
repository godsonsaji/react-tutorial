import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.029397&lng=76.3076449&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    setListOfRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (listOfRes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="mid-container">
        <div className="btn-container">
          <button
            onClick={() => {
              let filteredList = listOfRes.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListOfRes(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="search-container">
          <input type="text-box" placeholder="Biriyani"></input>
          <button>Search</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
