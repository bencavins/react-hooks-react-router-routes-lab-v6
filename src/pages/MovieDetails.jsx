import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function MovieDetails() {
  // one way of preventing the code from crashing on the first render
  // const [movie, setMovie] = useState({'genres': []})
  const [movie, setMovie] = useState(null)

  // get the url parameters
  const params = useParams()
  // console.log(movie.genres)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(resp => resp.json())
    .then(jsonData => setMovie(jsonData))
  }, [])

  // can display a loading screen message while waiting for the fetch
  if (movie === null) {
    return <p>Loading...</p>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time}</p>
        Genres:
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </main>
    </>
  );
};

export default MovieDetails;
