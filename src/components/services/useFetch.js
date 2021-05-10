import { useEffect, useState } from "react"

function useFetch(getAnimesFromAPI, searchValue){
const [data, setData] = useState(null)

    useEffect(()=>{
        if(searchValue){
            const timeOut = setTimeout(async ()=>{
                const resource = await getAnimesFromAPI(searchValue);
                setData(resource);
            }, 500)
            return()=>{
                clearTimeout(timeOut);
            }
        }
    }, [getAnimesFromAPI, searchValue])

    return data
}

export default useFetch
