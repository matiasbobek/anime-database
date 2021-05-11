import {loadAnimesFromStorage, saveAnimesInStorage, saveAnimeInStorage, loadAnimeFromStorage} from './storage'

const BASE_URL = 'https://api.jikan.moe/v3';

async function getAnimesFromAPI (searchValue){
    
    try{
        return loadAnimesFromStorage(searchValue);
    }catch{
        const animesData = await fetch(`${BASE_URL}/search/anime?q=${searchValue}`) 
        const animesJSON = await animesData.json();
        saveAnimesInStorage(animesJSON,searchValue)
        return animesJSON;
    }
}

export async function getAnimeFromAPI (id){
    
    try{
        return loadAnimeFromStorage(id)
    }catch{
        const animeData = await fetch(`${BASE_URL}/anime/${id}`)
        const animeJSON = await (animeData.json());
        saveAnimeInStorage(id, animeJSON)
        return animeJSON;
    }
}


export default getAnimesFromAPI;
