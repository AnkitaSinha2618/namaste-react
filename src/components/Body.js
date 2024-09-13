import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State variable - Super Powerful variable
  const [listofRestautrants, setListofRestautrant] = useState([]);
  const [filteredRestautrants, setFilteredRestautrants] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("body component render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.439029988982334&lng=78.45497108995914&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements);
    setListofRestautrant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestautrants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // if(listofRestautrants.length === 0){
  //   return <Shimmer/>
  // }

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

  //use of ternary operator
  return listofRestautrants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRest = listofRestautrants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestautrants(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            const filteredList = listofRestautrants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestautrants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredRestautrants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
