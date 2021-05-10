import { useState } from "react";
import useFetch from "../services/useFetch";
import getAnimesFromAPI from "../services/API"
import AnimeCover from '../small/AnimeCover'
import  { NavLink } from 'react-router-dom';

function AnimesSearch(){
    const [searchValue, setSearchValue] = useState(null);
    const data = useFetch(getAnimesFromAPI, searchValue);

    return (
    <>
    <span>Search for an anime: </span>
    <input type="text" onChange={(e)=>setSearchValue(e.target.value)}/>
    <p>{searchValue}</p>
    <ul>
    {data && (
        data.results.map((result)=>(
            <AnimeCover
                key={result.title}
                title = {result.title}
                imageUrl = {result.image_url}
            />
        ))
    )}    
    </ul>
    </>)
}

export default AnimesSearch;