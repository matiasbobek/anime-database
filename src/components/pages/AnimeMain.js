import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getAnimeFromAPI} from '../services/API'
import useFetchAnime from '../services/useFetchAnime'
import './AnimeMain.css'

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
        <div id="anime-search">
            {data && (
                <div className="columns">
                    <div className="column" id="column-1">
                        <h1 className="is-size-2">{data.title}</h1>
                        <img src={data.image_url} alt={data.title} />
                    </div>
                    <div className="column" id="column-2">
                        <div>Score: {data.score}</div>
                        <div>Episodes: {data.episodes}</div>
                        {data.source === 'Original' ? (
                        <div>Original anime</div>
                        ) : (
                        <div>Based on a {data.source.toLowerCase()}</div>
                        )}
                        <a href={data.url} target="_blank" rel="noopener noreferrer">
                        Check it out on MAL!
                        </a>
                        <hr></hr>
                        <p>{data.synopsis}</p>
                    </div>
                    {data.trailer_url && (
                        <div className="column" id="column-3">
                        <h1 className="is-size-2" id="main-title">Trailer</h1>
                        <iframe
                            id="trailer"
                            title={`Trailer for ${data.title}`}
                            width="350"
                            height="300"
                            src={data.trailer_url}
                            frameborder="0"
                            allowfullscreen
                        />
                        </div>)                    
                    }
                </div>
            )}       
        </div>
    )
}

export default AnimeMain;