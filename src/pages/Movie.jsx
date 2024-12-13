import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Movie() {
  const [movie, setMovie] = useState()
  const movieId = useParams().id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(resp => resp.json())
    .then(jsonData => setMovie(jsonData))
  }, [])

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MovieCard {...movie} />
      </main>
    </>
  );
};

export default Movie;
