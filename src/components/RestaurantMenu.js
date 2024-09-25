import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId)
  

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")} -{" "}
        {costForTwoMessage}
      </h2>
      <ul>
        {itemCards.map((menu) => (
            <li key={menu.card.info.id}>{menu.card.info.name} - {"Rs."} {menu.card.info.price || menu.card.info.defaultPrice / 100}</li>))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
