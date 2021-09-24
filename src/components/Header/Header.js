import { useState } from "react";
import { connect } from "react-redux";
import { startSearch, enterSearchWord } from '../../ReduxStore/searchFilmReduser/serchFilmReduser';


const Header = ({startSearch, enterSearchWord}) => {

  const [searhInputWord, setSearhInputWord] = useState('')
  
  const changeInput = (e) => {
    setSearhInputWord(e.target.value)
  } 

  const searchStart = (e) => {
    if(e.keyCode === 13) {
      enterSearchWord(searhInputWord)
      startSearch(searhInputWord)
    }
  }

  return (<>
    <header>
      <h1>Movie Catalog</h1>
      <div className='headerInput'>
        <input type='text' value={searhInputWord} onChange={changeInput} onKeyDown={searchStart}/>
      </div>
      <div className='userName'>
        <span className='icons icons-user'>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png" alt='icons user'/>
          </span>
        <p>Alexander Borisenko</p>
        <span className='icons icons-arrow'>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt='icons arrow'/>
        </span>
      </div>
    </header>
  </>)
}

export default connect(null,{startSearch, enterSearchWord})(Header);