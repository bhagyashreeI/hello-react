import React,{useEffect, useState} from 'react';
import RestCard from './RestCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [restarantList,setRestList] = useState([]);
    const [filtredRestarantList,setFiltredRestList] = useState([]);
    //const [restarantList, setRestList] = useState({previous: [], current: []});
    const [searchval,setSearchVal] = useState('');
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5532691&lng=73.9231229&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const allrest = json?.data?.cards?.[2]?.data?.data?.cards;
        setRestList(allrest);
        setFiltredRestList(allrest);
    }
    //conditional rendering
    
   

    return filtredRestarantList.length === 0 ? 
        <div className="shimmer-container">
            {Array(10).fill(1).map((el, i) =>
                <Shimmer key={i} />
            )}
        </div> : (
        <div className="bodycontainer">
            <div className="filter">
                <button className="filter-btn body-btn" onClick={()=>{
                    setFiltredRestList(restarantList)
                }}>All Restaurants</button>
                <button className="filter-btn body-btn" onClick={()=>{
                    const filteredList =  restarantList.filter((res) => res.data.avgRating > 4);
                    setFiltredRestList(filteredList);
                }}>Top Rated Restaurants</button>
                <input type="text" onChange={(e)=>{
                    setSearchVal(e.target.value)
                }}  placeholder="Search restaurant..." className="search-input"/>
                <button className="search-btn body-btn" onClick={() => {
                    if(searchval == ''){
                        setFiltredRestList(restarantList)
                    }else{
                        const filteredList =  restarantList.filter((res) => res?.data?.name?.toLowerCase()?.includes(searchval.toLowerCase()));
                        console.log(filteredList);
                        setFiltredRestList(filteredList);
                    }
                    
                }}>Search</button>
            </div>
            <div className='container'>
                {
                    filtredRestarantList.map(restaurant =>(
                        <RestCard key={restaurant.data.id} restData={restaurant} />
                    ))
                }
            </div>
        </div>
    )

}
export default Body;