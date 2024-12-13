import {Link} from 'react-router-dom';

function MovieCard({ id, title, time, genres }) {
  
  return (
    <article>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
        <p>Runtime: {time} mins</p>
        <ul>
          {genres.map(genre => <li>{genre}</li>)}
        </ul>
    </article>
  );
};

export default MovieCard;