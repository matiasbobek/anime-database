const BASE_URL = 'https://api.jikan.moe/v3';

async function getAnimesFromAPI (searchValue){
    const animesData = await fetch(`${BASE_URL}/search/anime?q=${searchValue}`)
    const animesJSON = await (animesData.json());
    return animesJSON;
}

export async function getAnimeFromAPI (id){
    const animeData = await fetch(`${BASE_URL}/anime/223`)
    const animeJSON = await (animeData.json());
    return animeJSON;
}

export default getAnimesFromAPI;
