import thunkMiddleware from "redux-thunk";
import  { applyMiddleware, combineReducers, compose, createStore } from "redux";
import filmReduser from "./filmReduser/filmReduser";
import searchFilmReduser from "./searchFilmReduser/serchFilmReduser";


const reducers = combineReducers({
  filmReduser,
  searchFilmReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const state = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default state;