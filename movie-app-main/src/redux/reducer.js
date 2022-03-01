import { Data } from "../components/Data";
import { ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE,FILTER_MOVIE } from "./actiontype";


const initialState = {
datamovies:Data
  }
  
const reducer= (state=initialState, action )=>{
    switch(action.type ){
        case ADD_MOVIE:
            return{
                ...state,
                datamovies:[...state.datamovies, action.payloed]

            }
        case DELETE_MOVIE:
                return{
                    ...state,datamovies:
                    state.datamovies.filter((el) => el.id !== action.payload)

                }
        case EDIT_MOVIE:
            return{

            }
        case FILTER_MOVIE:
            return{

            }

        default:
            return state;
    }
}
export default reducer