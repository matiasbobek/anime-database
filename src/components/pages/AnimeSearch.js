import { useState } from "react";

function AnimeSearch(){
    const [searchValue, setSearchValue] = useState('');
    return (
    <>
    <span>Search for an anime: </span>
    <input type="text" onChange={(e)=>setSearchValue(e.target.value)}/>
    <p>{searchValue}</p>
    </>)
}

export default AnimeSearch;