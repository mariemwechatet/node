import React from 'react'
import './style/MovieCard.css'
import Edit from './Edit';
import { delmovie} from '../redux/action';
import { useDispatch } from 'react-redux';
import StarRating from './StarRating';
const MovieCard = ({movies}) => {
    
    const dispatch = useDispatch()
    return (
        <div>
           <div className="card">
               <StarRating rating={movies.rating}/>
      
       <img src={movies.image} alt="" />
       
      <h3>{movies.date}</h3>
      <h3>{movies.name}</h3>
 <button onClick={() => dispatch(delmovie(movies.id))}>delete</button> 
    </div> 
    {/* <Edit movies={movies}/>  */}
        </div>
    )
}

export default MovieCard
