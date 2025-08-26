import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text-box" placeholder="Biriyani"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
