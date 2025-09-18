// import React, { useEffect, useState } from "react";
// import "./Row.css";
// import axios from "../../../utilis/axios";
// import movieTrailer from 'movie-trailer'
// import youTube from 'react-youtube'
// import { width } from "@mui/system";

// const Row = ({ title, fetchUrl, isLargeRow }) => {

//   const [movies, setMovie] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const base_url = "https://image.tmdb.org/t/p/original";

  
//   useEffect(() => {
//     async () => {
//       try {
//         console.log(fetchUrl);
//         const request = await axios.get(fetchUrl);
//         console.log(request);
//         setMovie(request.data.results);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//    if (trailerUrl) {setTrailerUrl("")}
//    else {
//     movieTrailer(movie?.title || movie?.name || movie?.original_name)
//     .then((url) => {
//       console.log(url);
//       const urlParams = new URLSearchParams(new URL(url).search)
//       console.log(urlParams);
//       console.log(urlParams.get('v'));
//       setTrailerUrl(urlParams.get('v'));
//     })
//    }
//   }

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row_poster">
//         {movies?.map((movie, index) => (
//           <img
//           onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//             alt={movie.name}  
//             className={`row_poster${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>
//       <div>{trailerUrl && <touTube videoId={trailerUrl} opts={opts}/>}
//       </div>
//     </div>
//   );
// };

// export default Row;

import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utilis/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube"; // <-- Capitalized, default export

const IMG_BASE = "https://image.tmdb.org/t/p";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(fetchUrl);
        setMovies(data?.results ?? []);
      } catch (error) {
        console.error("Row fetch error:", error);
      }
    };
    if (fetchUrl) fetchData(); // <-- call it
  }, [fetchUrl]);

  const handleClick = (m) => {
    if (trailerId) return setTrailerId("");

    const name = m?.title || m?.name || m?.original_name || "";
    // Try to get the video ID directly
    movieTrailer(name, { id: true })
      .then((id) => {
        if (id) setTrailerId(id);
        else throw new Error("No id");
      })
      .catch(async () => {
        // Fallback: get full URL and parse ?v=
        try {
          const url = await movieTrailer(name + " trailer");
          const params = new URLSearchParams(new URL(url).search);
          setTrailerId(params.get("v") || "");
        } catch (e) {
          console.error("No trailer found for:", name, e);
        }
      });
  };

  const opts = { height: "390", width: "100%", playerVars: { autoplay: 1 } };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies
          .filter((m) => (isLargeRow ? m.poster_path : m.backdrop_path))
          .map((m) => (
            <img
              key={m.id}
              onClick={() => handleClick(m)}
              src={`${IMG_BASE}/${isLargeRow ? "w500" : "w300"}${
                isLargeRow ? m.poster_path : m.backdrop_path
              }`}
              alt={m.title || m.name || m.original_name || "Poster"}
              className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
              loading="lazy"
            />
          ))}
      </div>

      {trailerId && (
        <div className="row_trailer">
          <YouTube videoId={trailerId} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
