import { useEffect, useReducer } from "react"

const initialState = {data:null, loading: false}

const fetchReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case ("Loading"):
            return ({...state, data:null, loading:true})
        case ("Success"):
            return({...state, data:payload, loading:false})
        default: 
            return state;
    } 

}

function useFetchAnimes(getAnimesFromAPI, searchValue){
    const [state, dispatch] = useReducer(fetchReducer, initialState);
    
    useEffect(()=>{
        if(searchValue){
            const timeOut = setTimeout(async ()=>{
                dispatch({type: "Loading"});
                try{
                    const resource = await getAnimesFromAPI(searchValue);
                    console.log(resource.status)
                    if(resource.status!==404){
                        dispatch({type: "Success", payload:resource})
                    } else{
                        dispatch({type: "Success", payload:null})
                    }
                }catch(error){
                    console.error(error)
                }

            }, 500)
            return()=>{
                clearTimeout(timeOut);
            }
        }
    }, [getAnimesFromAPI, searchValue])

    return state
    }


export default useFetchAnimes;
