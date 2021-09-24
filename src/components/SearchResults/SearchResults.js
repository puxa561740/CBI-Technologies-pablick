import { useSelector } from "react-redux";

const SearchResults = () => {

  const dataSearchRes = useSelector(state=>state.searchFilmReduser)

  return(<>
    <div className='searchBlock'>
      <h2>
      You searched for: <span>{dataSearchRes.enterSearchWord},</span> {
        dataSearchRes.searchFilm.Error ? <span><h3>ERROR</h3>{dataSearchRes.searchFilm.Error}</span> : <span>{dataSearchRes.searchFilm.totalResults} results found</span>
      }
      </h2>
    </div>
  </>)
}

export default SearchResults;