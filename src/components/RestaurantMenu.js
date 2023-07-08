import React, { useEffect, useState } from 'react';
import { MENU_API } from "./../../utils/constants"
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const { resId } = useParams();

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    if(resInfo === null) return (
        <div className="shimmer-container">
            {Array(10).fill(1).map((el, i) =>
                <Shimmer key={i} />
            )}
        </div>
    )
    const {name,cuisines,areaName,avgRatingString,totalRatingsString} = resInfo?.cards?.[0]?.card?.card?.info || {}
    const { itemCards } = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};
    
    console.log("dsfdsf", resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card)
    return  (
        
        <>
            <div className="restaurantHeader_wrapper">
                <div className="nameAddress_wrapper">
                    <p>{name}</p>
                    <p>{cuisines?.join(", ")}</p>
                    <p>{areaName}, {resInfo?.cards?.[0]?.card?.card?.info?.sla?.lastMileTravelString}</p>
                </div>
                <div className="rating_wrapper">
                    <button aria-hidden="true" className="btn_wrapper">
                        <span aria-hidden="true" className="ratings_avgRating">
                            <span className="icon-star"></span>
                            <span>{avgRatingString}</span>
                        </span>
                        <span aria-hidden="true">{totalRatingsString}</span>
                    </button>
                </div>
                <div className="menu_wrapper">
                {
                    itemCards.map(item => (
                        <div key={item.card.info.id}>
                            <p>{item.card.info.name}</p>
                            <span>Rs. {item.card.info.price / 100 || item.card.info.defaultPrice/100}</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    );
};

export default RestaurantMenu;
