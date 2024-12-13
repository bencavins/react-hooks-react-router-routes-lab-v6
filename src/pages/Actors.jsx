import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(resp => resp.json())
    .then(jsonData => setActors(jsonData))
  }, [])

  const actorLis = actors.map(actor => {
    return <li>
      <h2>{actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map(movie => {
          return <li>{movie}</li>
        })}
      </ul>
    </li>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ul>
          {actorLis}
        </ul>
      </main>
    </>
  );
};

export default Actors;
