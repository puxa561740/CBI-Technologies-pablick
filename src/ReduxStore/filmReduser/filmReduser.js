import { apiFilm } from "../../api/api"
import { CATCH } from "./constans"
import { catchFilm } from './action'

const defaultState = {
  film: [],
  load: false
}

const filmReduser = (state = defaultState, action) =>{
  switch (action.type){
    case CATCH:
      return {
        ...state,
        film: action.film
      }
    default: 
      return state
  }
}

export const requestFilm = () => {
  return async (dispatch) => {
    let film = await apiFilm.getFilms()
    dispatch(catchFilm(film))
  }
}

export default filmReduser