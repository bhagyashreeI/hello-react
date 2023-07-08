import React from 'react';
import { CDN_URL } from "./../../utils/constants"

const RestCard = (props) =>{
    const { restData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        id
    } = restData?.data;
    return (
        <div className="card">
            <img src={CDN_URL + cloudinaryImageId} height="100" />
            <h3>{name} {id}</h3>
            <span>{cuisines.join(',')}</span>
            <h4>{avgRating}</h4>
            <h4>Rs.{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestCard;