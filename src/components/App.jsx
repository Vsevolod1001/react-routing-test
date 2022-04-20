import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Layout } from './Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path=":reviews" element={<Reviews />} />
            <Route path=":cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Navigate to="/homepage" />} />
        </Route>
      </Routes>
    </div>
  );
};
