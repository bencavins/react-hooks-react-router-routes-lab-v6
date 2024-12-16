import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(resp => resp.json())
    .then(jsonData => setMovies(jsonData))
  }, [])

  const movieCards = movies.map(movie => {
    return <MovieCard key={movie.id} {...movie} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movieCards}
      </main>
    </>
  );
};

export default Home;
