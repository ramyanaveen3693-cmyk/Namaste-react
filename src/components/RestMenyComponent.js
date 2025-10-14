import { useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import { useParams } from "react-router";
import useRestaurantMenu from  '../utils/useRestaurantMenu'


const RestMenyComponent = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)



  if (resInfo === null) return <Shimmer />;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[1]?.card?.card?.info || {};

  const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  console.log("categories:",categories)


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
      <ul>
       {itemCards.map((item)=>{
         return <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price /100}Rs</li>
       })}
      </ul>
    </div>
  );
};

export default RestMenyComponent;
