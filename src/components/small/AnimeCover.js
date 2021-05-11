import  { NavLink } from 'react-router-dom';

function AnimeCover({title, imageUrl, id}){
    return(
        <NavLink to={`/anime/${id}`}>
            <h3>{title}</h3>
            <img src={imageUrl} alt={title}/>
        </NavLink>        
    )
}

export default AnimeCover;