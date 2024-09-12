import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State variable - Super Powerful variable
  const [listofRestautrants, setListofRestautrant] = useState(resList);

  //normal js variables
  // let listofRestautrantsjs = [
  //     {
  //     "info": {
  //       "id": "408328",
  //       "name": "Kwality Walls Ice Cream and More",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/f0f4f88a-4952-4a93-82e8-f8dce80e10f8_408328.JPG",
  //       "locality": "Circle No14",
  //       "areaName": "Jubilee Hills",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Desserts",
  //         "Ice Cream",
  //         "Ice Cream Cakes"
  //       ],
  //       "avgRating": 4.3,
  //       "veg": true,
  //       "parentId": "582",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "479",
  //       "sla": {
  //         "deliveryTime": 30,
  //         "lastMileTravel": 2.8,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "25-30 mins",
  //         "lastMileTravelString": "2.8 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //     }
  //   },
  //     {
  //       "info": {
  //       "id": "491475",
  //       "name": "Chinese Wok",
  //       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //       "locality": "Ameerpet",
  //       "areaName": "Gachibowli",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Chinese",
  //         "Asian",
  //         "Tibetan",
  //         "Desserts"
  //       ],
  //       "avgRating": 3.3,
  //       "parentId": "61955",
  //       "avgRatingString": "4.2",
  //       "totalRatingsString": "2.7K+",
  //       "sla": {
  //         "deliveryTime": 24,
  //         "lastMileTravel": 1.6,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "20-25 mins",
  //         "lastMileTravelString": "1.6 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //     }
  //   }
  // ]
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestautrants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestautrant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {listofRestautrants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
