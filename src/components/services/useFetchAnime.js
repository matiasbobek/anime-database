import { useEffect, useState } from "react";

function useFetchAnime(getAnimeFromAPI, id){
    
   const [data, setData] = useState(null);

   useEffect(()=> {
    async function fetchData(){
     setData(await getAnimeFromAPI(id))
    }
    fetchData();
   }, [getAnimeFromAPI, id])

    return data
}

export default useFetchAnime;