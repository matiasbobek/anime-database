import { useState } from "react";
import useFetchAnimes from "../services/useFetchAnimes";
import getAnimesFromAPI from "../services/API"
import AnimeCover from '../small/AnimeCover'

function AnimesSearch(){
    const [searchValue, setSearchValue] = useState(null);
    const data = useFetchAnimes(getAnimesFromAPI, searchValue);
    const [loading, setLoading] = useState(false)

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
                id={result.mal_id}
            />
        ))
    )}    
    </ul>
    </>)
}

export default AnimesSearch;