import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    const data = await fetch(RESTAURANT_URL);
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
 
  //To check offline or online
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>Looks like you are offline, Please check your Internet connection;</h1>
  }

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
          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} style={{ textDecoration: 'none' }}><RestaurantCard   resData={restaurant}/></Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;
