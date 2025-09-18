import React, { useEffect, useState } from 'react'
import "./Movies.css"
const Movies = () => {
const[movieList, setMovielist] = useState([]) 
    
const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d0808b4da862aa38b0d8c71bf0985bf3"
    )
    .then(res => res.json())
    .then(json => setMovielist(json.results))
}
useEffect(()=>{
    getMovie()
},[])

console.log(movieList);

    
  return (
    <div>
      {movieList.map((movie) => (
        <img className='movieStyle' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      ))}
    </div>
  );
}

export default Movies