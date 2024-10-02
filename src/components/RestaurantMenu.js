import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId)
  

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "data");

  //for accordian data
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
  
  return (
    <div className="menu">
      <h1 style={{marginBottom:"6px"}}>{name}</h1>
      <p style={{fontWeight:"bold", fontSize:"2xl"}}>
        {cuisines.join(",")} -{" "} {costForTwoMessage}
      </p>
      {/* Categories */}
      {categories.map((category)=> 
        (<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
        ))}
    </div>
  );
};
export default RestaurantMenu;
