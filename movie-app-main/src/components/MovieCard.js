import React from 'react'
import './style/MovieCard.css'
import Edit from './Edit';
import { delmovie} from '../redux/action';
import StarRatings from './StartRatings';
import { useDispatch } from 'react-redux';
const MovieCard = ({movies}) => {
    
    const dispatch = useDispatch()
    return (
        <div>
           <div className="card">
      <StarRatings rating={movies.rating}/>
      
       <img src={movies.img} alt="" />
       
      <h3>{movies.data}</h3>
      <h3>{movies.name}</h3>
<button onClick={() => dispatch(delmovie(movies.id))}>delete</button>
    </div> 
    <Edit movies={movies}/>
        </div>
    )
}

export default MovieCard
