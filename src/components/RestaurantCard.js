import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;
    const {loggedInUser} = useContext(UserContext);


    // console.log(resData);
    
  return (
  <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
    <img className="res-logo" alt="rest-log" src={CDN_URL + cloudinaryImageId}/>
    <h5>{name}</h5>
    <h5>{cuisines.join(",")}</h5>
    <h5>{costForTwo}</h5>
    <h5>{avgRating}</h5>
    <h5>{resData.info.sla.deliveryTime} minutes</h5>
    <h4>User:{loggedInUser}</h4>

  </div>
  );
};

//Higher order comonent
//input- RestaurantCard ==> RestaurantCardOffer

export const withOfferLabel = (RestaurantCard) =>{
  return (props)=>{    
    return (
      <div>
        <label className="offerLabel">Offer</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;