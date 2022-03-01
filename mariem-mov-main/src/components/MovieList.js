import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import './style/MovieCard.css'


const MovieList = () => {
const movie = useSelector(state => state.movie)   
 return (
        <div className="list">
            {
            movie.map((el,i)=><MovieCard  movies={el} key={i}/>)
        }
        </div>
    )
}



export default    MovieList;
