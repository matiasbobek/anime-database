export function saveAnimesInStorage(animesData, searchValue) {
    if (animesData === null) {
      throw new Error('There is missing data from the animes to save');
    }
    localStorage.setItem(searchValue, JSON.stringify(animesData));
  }
  
  export function loadAnimesFromStorage(searchValue) {
    const animes = JSON.parse(localStorage.getItem(searchValue));
    if (animes === null) {
      throw new Error(`There are no saved animes with search value: ${searchValue}`);
    }
    return animes;
  }
  
export function saveAnimeInStorage(id, anime){
  if(anime === null){
    throw new Error('there are no animes to save')
  } 
  localStorage.setItem(id, JSON.stringify(anime))
}


export function loadAnimeFromStorage(id){
  const anime = JSON.parse(localStorage.getItem(id))
  if(anime===null){
    throw new Error('there is no saved anime with that id')
  }
  return anime
}
