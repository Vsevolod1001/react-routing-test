import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/homepage">Home-page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <Outlet />
    </div>
  );
};
