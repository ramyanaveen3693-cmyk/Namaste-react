import { CDN_URL } from "../utils/constants.js";
const RestaurantCartComponent = (props) => {
 const resObj = props['resData']['info'];
 const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resObj;
  return (
    <div className="res-card">
      <img className="res-img1" src={ CDN_URL + resObj.cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join("-")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resObj.sla.deliveryTime}</h4>
    </div>
  );
};

//Higher order component which will take component and returns emhanced version of new card
//input - Restaurant card - Restaurant card prompoted lable

export const withPromotedLabel = (RestaurantCartComponent) => {
  return (props) => {
    return(
      <div>
        <label className="promoted-labesl">Promoted</label>
        <RestaurantCartComponent {...props}/>
      </div>
    )
  };
};

export default RestaurantCartComponent