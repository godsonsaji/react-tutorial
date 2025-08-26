import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="body">
      <div className="mid-container">
        <div className="btn-container">
          <button
            onClick={() => {
              let filteredList = listOfRes.filter(
                (res) => res.card.card.info.avgRating >= 4.5
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
          <ResCard key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
