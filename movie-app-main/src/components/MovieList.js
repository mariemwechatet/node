import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import './style/MovieCard.css'


const MovieList = () => {
    const movies = useSelector(state => state.movies)
    return (
        <div className="list">{
            movies.map((el,i)=><MovieCard movies={el} key={i}/>)
            }
        </div>
    )
}


export default    MovieList;
