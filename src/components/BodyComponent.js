import RestaurantCartComponent, {withPromotedLabel}  from "./RestaurantCartComponent";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCartComponent);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // safely extract restaurants
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      console.log("filteredRestro:",restaurants)
      setListOfRestaurants(restaurants);
      setFilteredRestro(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1>Looks like you are offline, Please check your internet connection!!!</h1>
    )
  }


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              console.log("Filtered:", filtered);
              setFilteredRestro(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestro.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestro.map((resto) => (
            <Link key={resto.info.id} to={`/restaurant/${resto.info.id}` }>
             { resto.info.id ? (<RestaurantCardPromoted  key={resto.info.id} resData={resto}/>) :(<RestaurantCartComponent key={resto.info.id} resData={resto} />)}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
