import { useState } from "react";
import useFetch from "../services/useFetch";
import getAnimesFromAPI from "../services/API"

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
            <div>
                <p key={result.title}>{result.title}</p>
                <img src={result.image_url} alt={result.title}/>
            </div>
        ))
    )}    
    </ul>
    </>)
}

export default AnimesSearch;