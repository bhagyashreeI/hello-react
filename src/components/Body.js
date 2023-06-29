import React,{useEffect, useState} from 'react';
import RestCard from './RestCard';
import { restLlist } from "./../../utils/mockdata";

const Body = () => {
    //const [restarantList,setRestList] = useState(restLlist);
    const [restarantList, setRestList] = useState({previous: restLlist, current: restLlist});
    const [searchval,setSearchVal] = useState('');
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5532691&lng=73.9231229&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json.data.cards[2].data.data.cards);
        const allrest = json.data.cards[2].data.data.cards;
        setRestList({ previous: allrest, current: allrest });
    }
    return (
        <div className="bodycontainer">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    setRestList({current: restarantList.previous,previous:  restarantList.previous})
                }}>All Restaurants</button>
                <button className="filter-btn" onClick={()=>{
                    const filteredList =  restarantList.current.filter((res) => res.data.avgRating > 4);
                    setRestList({previous: restarantList.previous, current: filteredList});
                    //const filteredList =  restarantList.filter((res) => res.data.avgRating > 4);
                    //setRestList(filteredList);
                }}>Top Rated Restaurants</button>
                <input type="text" onChange={(e)=>{
                    setSearchVal(e.target.value)
                }}  placeholder="Search restaurant..."/>
                <button className="" onClick={() => {
                    if(searchval == ''){
                        setRestList({current: restarantList.previous,previous:  restarantList.previous})
                    }else{
                        const filteredList =  restarantList.current.filter((res) => res?.data?.name?.toLowerCase()?.includes(searchval.toLowerCase()));
                        setRestList({previous: restarantList.previous, current: filteredList});
                    }
                    
                }}>Search</button>
            </div>
            <div className='container'>
                {
                    restarantList.current.map(restaurant =>(
                        <RestCard key={restaurant.data.id} restData={restaurant} />
                    ))
                }
            </div>
        </div>
    )

}
export default Body;