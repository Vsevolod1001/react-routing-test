import { useState, useEffect } from 'react';
import { fetchSearch } from 'components/service/fettchAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState([]);
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }
    async function fetchMovies() {
      try {
        const item = await fetchSearch(query);
        setSearch(item);
      } catch (error) {}
    }
    fetchMovies();
  }, [query]);

  const hendleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
    e.currentTarget.reset();
  };

  return (
    <div>
      <div>
        <form onSubmit={hendleSubmit}>
          <label></label>
          <input type="text" name="query" />
          <button type="submit">search</button>
        </form>
      </div>
      {search.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </div>
  );
};
