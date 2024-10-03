import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
      {categories.map((category, index)=> 
       //controlled component
        (<RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = {()=>setShowIndex(index)}
          />
        ))}
    </div>
  );
};
export default RestaurantMenu;
