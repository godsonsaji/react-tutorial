import { IMAGE_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRatingString, cuisines, locality, cloudinaryImageId } =
    resData.card.card.info;
  const { slaString } = resData.card.card.info.sla;
  return (
    <div className="card-container">
      <img src={IMAGE_URL + cloudinaryImageId}></img>
      <div className="text-container">
        <h1 className="card-title">{name}</h1>
        <span className="rating">{avgRatingString} Ratings</span>
        <span className="time">{slaString}</span>
        <h3 className="cuisines">{cuisines.join(",")}</h3>
        <h3 className="location">{locality}</h3>
      </div>
    </div>
  );
};

export default ResCard;
