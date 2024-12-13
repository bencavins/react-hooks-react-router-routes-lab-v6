import {Link} from 'react-router-dom';

function DirectorCard({ name, movies }) {
  
  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {movies.map(movie => <li>{movie}</li>)}
      </ul>
    </article>
  );
};

export default DirectorCard;