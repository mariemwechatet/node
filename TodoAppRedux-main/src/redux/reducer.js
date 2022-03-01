

import { ADD_TASK, DELETE_TASK, EDIT_TASK, UPDATE_ITEM } from './actiontype'

const initialState = {
  task: [
    { id: Math.random(), Description: 'weke up', isDone: true },
   
    { id: Math.random(), Description: 'get up', isDone: true },

  ],
  

}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        task: [...state.task, action.payload],
      }

    case DELETE_TASK:
      return {
        task: [...state.task.filter((el) => el.id !== action.payload)],
      }
     
    
        
    case UPDATE_ITEM:
      return {
        task: [
          ...state.task.map((el) =>
            el.id === action.id ? { ...el, isDone: !el.isDone } : el,
          ),
        ],
      }
    case EDIT_TASK:
      return { ...state, task: state.task.map((el) =>
         (el.id === action.payload.id) ? 
         { ...el, Description: action.payload.newt } : el) }


    default:
      return state
  }

}




export default reducer
