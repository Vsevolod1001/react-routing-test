import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetail } from 'components/service/fettchAPI';

const img = 'https://image.tmdb.org/t/p/w500';
export const MovieDetailsPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    async function fetchMovies() {
      try {
        const item = await fetchDetail(id);
        setItem(item);
      } catch (error) {}
    }
    fetchMovies();
  }, [id]);
  const { title, poster_path, release_date, vote_average, genres } = item;

  return (
    <div>
      <Link to={location?.state?.from ?? '/homepage'}>go back</Link>
      <div>
        <h2>{title}</h2>
        <p>{release_date}</p>
        <img style={{ width: 200 }} src={`${img}${poster_path}`} alt="" />
        <p>rating: {vote_average}</p>
        <div>
          <h3>Genres:</h3>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </div>
      </div>
      <div>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
