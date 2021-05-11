import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getAnimeFromAPI} from '../services/API'
import useFetchAnime from '../services/useFetchAnime'

function AnimeMain (){
    const { id } = useParams();
    const resource = useFetchAnime(getAnimeFromAPI, id)
    const [data, setData] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            setData(await resource);
        }
        fetchData();
    },[resource])

    return ( 
    <>
    {data &&
    <div>
        <h1>{data.title}</h1>
        <img src={data.image_url} alt={data.title} />
        <div>Score: {data.score}</div>
        <div>Episodes: {data.episodes}</div>
    </div>
    }
    </>
    )
}

export default AnimeMain;