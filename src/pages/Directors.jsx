import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(resp => resp.json())
    .then(jsonData => setDirectors(jsonData))
  }, [])

  const directorCards = directors.map(director => {
    return <DirectorCard key={director.id} {...director} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ul>
          {directorCards}
        </ul>
      </main>
    </>
  );
};

export default Directors;
