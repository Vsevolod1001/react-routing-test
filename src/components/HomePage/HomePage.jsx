import { fetchTrend } from 'components/service/fettchAPI';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
export const HomePage = () => {
  const [item, setItem] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const item = await fetchTrend();
        setItem(item);
      } catch (error) {}
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {item.map(({ title, id }) => (
        <li>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </div>
  );
};
