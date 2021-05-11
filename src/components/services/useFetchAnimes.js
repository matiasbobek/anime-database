import { useEffect, useState } from "react"

function useFetchAnimes(getAnimesFromAPI, searchValue){
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if(searchValue){
            const timeOut = setTimeout(async ()=>{
                setLoading(true);
                setData(null)
                try{
                    const resource = await getAnimesFromAPI(searchValue);
                    setData(resource);
                    setLoading(false);
                }catch(error){
                    console.error(error)
                }

            }, 500)
            return()=>{
                clearTimeout(timeOut);
            }
        }
    }, [getAnimesFromAPI, searchValue])

    return { data, loading}
}

export default useFetchAnimes;
