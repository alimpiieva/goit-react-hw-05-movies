import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Layout = () => {
  const isActiveLink = (match, location) => {
    return location.pathname === match?.url;
  };
  
  return (
    <header>
      <nav className='navbar bg-dark mb-3 navbar-expand-md'>
        <div className='container-fluid'>
          <span className='navbar-brand mb-0 h1 text-success'>
            Navbar
          </span>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                isActive={isActiveLink}
                className="nav-link  text-white "
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                isActive={isActiveLink}
                className="nav-link text-white"
                to="/movies"
              >
                Movies
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
       <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
    </header>
  );
}

export default Layout;


