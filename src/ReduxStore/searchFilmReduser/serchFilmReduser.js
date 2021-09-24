import { apiFilm } from "../../api/api"
import { SERCH, 
  IS_SEARCH, 
  CHANGE_WORD, 
  CHANGE_NUM_PAGES, 
  CHANGE_CURENT_PAGE,
  PLUS_PAGE_ONE,
  MINUS_PAGE_ONE
} from "./constans"
import { search, 
  isSearch, 
  changeEnterWorld, 
  allPage, 
  changeCurentPages,
  plusPageOne,
  minusPageOne

} from "./action"

const defaultState = {
  searchFilm: [],
  curentPage: 1,
  allPage: 0,
  isSearch: false,
  enterSearchWord:''
}

const searchFilmReduser = (state = defaultState, action) => {
  switch (action.type){
    case SERCH:
      return {
        ...state,
        searchFilm: action.resultSearach
      }
    case IS_SEARCH:
      return {
        ...state,
        isSearch: action.isS
    }
    case CHANGE_WORD:
      return {
        ...state,
        enterSearchWord: action.word
      }
    case CHANGE_NUM_PAGES:
      return {
        ...state,
        allPage: action.num
      }
    case CHANGE_CURENT_PAGE:
      return {
        ...state,
        curentPage: action.num
      }
    case PLUS_PAGE_ONE:
      return {
        ...state,
        curentPage: state.curentPage += 1
      }
    case MINUS_PAGE_ONE:
      return {
        ...state,
        curentPage:  state.curentPage -= 1
      }
    default: 
      return state
  }
}

export const enterSearchWord = (serchWord) => {
  return (dispatch) => {
    dispatch(changeEnterWorld(serchWord))
  }
}

export const startSearch = (serchWord, page = 1) => {
  return async (dispatch) => {
    dispatch(isSearch(true))
    let filmsSerchRes = await apiFilm.searchFilm(serchWord, page)
    dispatch(allPage(Math.ceil(filmsSerchRes.data.totalResults/10)))
    dispatch(search(filmsSerchRes.data))
    dispatch(isSearch(false))
  }
}

export const plusPage = () => {
  return dispatch => dispatch(plusPageOne())
}
export const minusPage = () => {
  return dispatch => dispatch(minusPageOne())
}

export const changeCurentPage = (num) => {
  return dispatch => {
    dispatch(changeCurentPages(num))
  }
}

export default searchFilmReduser