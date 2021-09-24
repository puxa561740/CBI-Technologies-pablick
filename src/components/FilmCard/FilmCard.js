
const FilmCard = ({data}) => {

  return (<>
    <div className='filmCard'>
      <div className='filmCard_img'>
        <img src={data.Poster !== 'N/A' ? data.Poster : "http://dummyimage.com/150x60/99cccc.jpg&text=The+image!"} alt='film poster'/>
        </div>
      <div className='filmCard_title'>
        <p><span>Title:</span> {data.Title}</p>
        <p><span>Year:</span> {data.Year}</p>
        <p><span>imdbID:</span> {data.imdbID}</p>
        <p><span>Type:</span> {data.Type}</p>
      </div>
    </div>
  </>)
}

export default FilmCard