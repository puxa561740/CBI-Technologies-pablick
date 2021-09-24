import { connect, useSelector } from "react-redux"
import { startSearch, 
  changeCurentPage,
  plusPage,
  minusPage } from "../../ReduxStore/searchFilmReduser/serchFilmReduser"

const TotalPages = ({startSearch, 
  changeCurentPage,
  plusPage,
  minusPage
}) => {

  // const allPages = useSelector(state=>state.searchFilmReduser.allPage)
  // const curentPage = useSelector(state=>state.searchFilmReduser.curentPage)
  // const searchWord = useSelector(state=>state.searchFilmReduser.enterSearchWord)
  // const isSearch = useSelector(state=>state.searchFilmReduser.isSearch)

  const {allPage, 
    curentPage, 
    enterSearchWord, 
    isSearch} = useSelector(state=>state.searchFilmReduser)


  let arr = []

  const selectedPage = (e)=>{
    startSearch(enterSearchWord, +e.target.innerText)
    changeCurentPage(+e.target.innerText)
  }

  const pagesNum = () => {
    for(let i =1; i < allPage+1; i++) {
      arr.push(i)
    }

    let startPage  = curentPage - 5
    let lastPage = curentPage + 5

    if(curentPage <= 5) {
      startPage = 0
      lastPage = 10 
    }

    if(curentPage >= allPage - 5) {
      lastPage = allPage
      startPage = allPage - 10
    }


    arr = arr.slice(startPage, lastPage)
    return arr.map(a=><span key={a} className={curentPage === a ? 'selectedPage' : undefined} onClick={selectedPage}>{a}</span>)
  }


  const plus = () => {
    startSearch(enterSearchWord, curentPage)
    plusPage()
  }

  const minus = () => {
    startSearch(enterSearchWord, curentPage)
    minusPage()
  }

  return (<>
    {!allPage ? null : <button className='minusPages' onClick={minus} disabled={curentPage === 1 || isSearch ? true : false}>
      <i className="arrow left"/>
      </button>}
    {pagesNum()}
    {!allPage ? null : <button className='plusPages' onClick={plus} disabled={curentPage === allPage || isSearch ? true : false}>
      <i className="arrow right"/>
      </button>}
  </>)
}

export default connect(null, {startSearch, changeCurentPage, plusPage, minusPage})(TotalPages)