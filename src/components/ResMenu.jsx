import Shimmer from "../components/Shimmer";
import { RES_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const ResMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RES_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
    </div>
  );
};
export default ResMenu;
