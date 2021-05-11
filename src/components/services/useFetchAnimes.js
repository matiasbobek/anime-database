import { useEffect, useState } from "react"

function useFetchAnimes(getAnimesFromAPI, searchValue){
const [data, setData] = useState(null)

    useEffect(()=>{
        if(searchValue){
            const timeOut = setTimeout(async ()=>{
                try{
                    const resource = await getAnimesFromAPI(searchValue);
                    setData(resource);
                }catch(error){
                    console.error(error)
                }

            }, 500)
            return()=>{
                clearTimeout(timeOut);
            }
        }
    }, [getAnimesFromAPI, searchValue])

    return data
}

export default useFetchAnimes;
