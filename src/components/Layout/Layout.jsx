import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const isActiveLink = (match, location) => {
    return location.pathname === match?.url;
  };

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-3'>
        <div className='container'>
          <span className='navbar-brand text-success'>
            Navbar
          </span>
          <div className='navbar-collapse'>
            <div className='navbar-nav ml-auto'>
              <NavLink
                isActive={isActiveLink}
                className='nav-link text-info btn btn-outline-info rounded-pill m-1'
                aria-current='page'
                to='/'
              >
                <span className="nav-text font-weight-bold text-white">Home</span>
              </NavLink>
              <NavLink
                isActive={isActiveLink}
                className='nav-link text-info btn btn-outline-info rounded-pill m-1'
                to='/movies'
              >
                <span className="nav-text font-weight-bold text-white">Movies</span>
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
};

export default Layout;
