import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, title = null }) => {
  const location = useLocation();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';
  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <>
      {title && <h3>{title}</h3>}
      <ul>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                  alt={original_title}
                />
                <p>{original_title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default MovieList;
