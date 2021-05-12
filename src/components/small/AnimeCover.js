import  { NavLink } from 'react-router-dom';
import './AnimeCover.css'

function AnimeCover({title, imageUrl, id}){
    const firstTitle = title.split(":")


    return(
        <div className="container" id="container-cover">
        <NavLink id="anime-link" to={`/anime/${id}`}>
            <h3>{firstTitle[0].substring(0,24)}</h3>
            <img id="image-cover" src={imageUrl} alt={title}/>
        </NavLink>        
        </div>
    )
}

export default AnimeCover;