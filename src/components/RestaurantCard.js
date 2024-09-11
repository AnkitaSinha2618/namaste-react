import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;

    console.log(resData);
    
  return (
  <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
    <img className="res-logo" alt="rest-log" src={CDN_URL + cloudinaryImageId}/>
    <h5>{name}</h5>
    <h5>{cuisines.join(",")}</h5>
    <h5>{costForTwo}</h5>
    <h5>{avgRating}</h5>
    <h5>{resData.info.sla.deliveryTime} minutes</h5>

  </div>
  );
};
export default RestaurantCard;