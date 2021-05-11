import { useEffect, useState } from "react";

function useFetchAnime(getAnimeFromAPI, id){
    
   const [data, setData] = useState(null);

   useEffect(()=> {
       try{
        setData(getAnimeFromAPI(id))
       }
       catch(error){
        console.error(error)
       }
   }, [getAnimeFromAPI, id])

    return data
}

export default useFetchAnime;