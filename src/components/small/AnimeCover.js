import  { NavLink } from 'react-router-dom';

function AnimeCover({title, imageUrl}){
    return(
        <NavLink to={`/anime/${title}`}>
            <h3>{title}</h3>
            <img src={imageUrl} alt={title}/>
        </NavLink>

        
    )
}

export default AnimeCover;