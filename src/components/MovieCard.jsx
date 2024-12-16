import { Link } from 'react-router-dom';

function MovieCard({ id, title, time }) {
  
  return (
    <article>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>Runtime: {time} mins</p>
    </article>
  );
};

export default MovieCard;