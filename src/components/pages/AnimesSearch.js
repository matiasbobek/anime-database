import { useState } from "react";
import useFetchAnimes from "../services/useFetchAnimes";
import getAnimesFromAPI from "../services/API"
import AnimeCover from '../small/AnimeCover'
import Loading from '../small/Loading'
import './AnimesSearch.css'

function AnimesSearch(){
    const [searchValue, setSearchValue] = useState(null);
    const {data, loading} = useFetchAnimes(getAnimesFromAPI, searchValue);

    return (
    <div id="animes-search">
        <div id="container-input">
            <span>Search for an anime: </span>
            <input type="text" onChange={(e)=>setSearchValue(e.target.value)}/>
        </div>
    {loading &&
        <Loading/>
    }
    <ul>
    {data ? (
        data.results.map((result)=>(
            <AnimeCover
                key={result.title}
                title = {result.title}
                imageUrl = {result.image_url}
                id={result.mal_id}
            />
        ))
    ):""}    
    </ul>
    </div>)
}

export default AnimesSearch;