import './App.css';
import { useSelector} from 'react-redux'
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import SearchFilmResult from './components/SearchFilmResult/SearchFilmResult'

function App() {

  const viewSerchInf = useSelector(state=>state.searchFilmReduser.searchFilm)
  // const films = useSelector(state=>state.filmReduser)

  return (
    <>
      <Header/>
        {viewSerchInf.length === 0 ? null : (
          <div className='main'>
            <SearchResults/>
            <SearchFilmResult/>
          </div>
        )}
        
      
    </>
  );
}

export default App;
