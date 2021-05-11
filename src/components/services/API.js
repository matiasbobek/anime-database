const BASE_URL = 'https://api.jikan.moe/v3';

async function getAnimesFromAPI (searchValue){
    try{
        const animesData = await fetch(`${BASE_URL}/search/anime?q=${searchValue}`)
        const animesJSON = await (animesData.json());
        return animesJSON;
    }catch(error){
        console.error(error)
    }

}

export async function getAnimeFromAPI (id){
    try {
        const animeData = await fetch(`${BASE_URL}/anime/${id}`)
        const animeJSON = await (animeData.json());
        return animeJSON;
    }catch (error){
        console.error(error)
    }
}

export default getAnimesFromAPI;
