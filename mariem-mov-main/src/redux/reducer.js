import { ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE,FILTER_MOVIE } from "./actiontype";


const initialState = {
    movie :[
        {id:Math.random(),
          name:"mirage",
          image:"https://media.senscritique.com/media/000020033237/source_big/Mirage.jpg",
          date:"13 novembre 2018",
          rating :5 ,
          trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
        },
        {id:Math.random(),
            name:"Cruella",
            image:"https://fr.web.img2.acsta.net/pictures/21/02/17/16/12/0290309.jpg",
            date:"28 mai 2021",
            rating :5 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
          {id:Math.random(),
            name:"fatherhood",
            image:"https://img5.cdn.cinoche.com/images/232e2662367bdba050e380ad699b8808.jpg",
            date:" 2021",
            rating :3 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
          {id:Math.random(),
            name:"combustion ",
            image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3KxhDrVgoxifn1JnMEF8cghNaAKBRdrueKcZjbrDOs6KVv_po",
            date:"2013",
            rating :4 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
          {id:Math.random(),
            name:"underground",
            image:"https://fr.web.img3.acsta.net/pictures/19/11/14/15/36/5224064.png",
            date:"2019",
            rating :5 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
          {id:Math.random(),
            name:"kissing booth 1",
            image:"https://fr.web.img5.acsta.net/pictures/18/05/04/15/03/2133793.jpg",
            date:"2018",
            rating :2 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
          {id:Math.random(),
            name:"mama",
            image:"https://www.telerama.fr/sites/tr_master/files/styles/380s/public/3bfb4c54-9253-46b6-bdde-4853864a7157_2.jpg?itok=V5h0WgRA",
            date:"2013",
            rating :2 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
          {id:Math.random(),
            name:" the nun",
            image:"data:image/jpeg;base64,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",
            date:"2018",
            rating :3 ,
            trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
          },
    ]
      }
  
const reducer= (state=initialState, action )=>{
    switch(action.type ){
        case ADD_MOVIE:
            return{
                ...state,movie :[...state.movie,action.payload]

            }
        case DELETE_MOVIE:
                return{
                    ...state,movie:
                    state.movie.filter((el) => el.id !== action.payload)

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