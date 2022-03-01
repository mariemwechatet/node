import { ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE,FILTER_MOVIE } from "./actiontype";



export const delmovie=(id)=>{
    return{
        type:DELETE_MOVIE,
        
        payload:id
    }
}
export const addmovie=(newmovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newmovie
    }
}
export const editmovie=(newmovie)=>{
    return{
        type:EDIT_MOVIE,
        payload:newmovie
    }
}
export const fitlermovie =(newmovie)=>{
    return{
        type:FILTER_MOVIE,
        payload:newmovie
    }
}

