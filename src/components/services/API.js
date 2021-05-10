const BASE_URL = 'https://api.jikan.moe/v3';

async function getAnimesFromAPI (searchValue){
    const animesData = await fetch(`${BASE_URL}/search/anime?q=${searchValue}`)
    const animesJSON = await (animesData.json());
    return animesJSON;
}

export default getAnimesFromAPI;
