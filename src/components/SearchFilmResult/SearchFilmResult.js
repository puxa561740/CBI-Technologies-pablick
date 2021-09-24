import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { requestFilm } from '../../ReduxStore/filmReduser/filmReduser'
import FilmCard from '../FilmCard/FilmCard'
import TotalPages from '../TotalPages/TotalPages'


const SerchFilmResult = ({requestFilm}) => {

  const stateFilmSearchRes = useSelector(state=>state.searchFilmReduser.searchFilm.Search)  

  useEffect(()=>{
    requestFilm()
  },[])


  return (<>
    
    <div className='searchResultBlock'>
      {stateFilmSearchRes ? 
      stateFilmSearchRes.map((a, i)=>{
        return <FilmCard key={i} data={a} />
      }) : null
    }
    </div>
    <div className='counPages'>
      <TotalPages/>
    </div>
  </>)
}


export default connect(null, {requestFilm})(SerchFilmResult)