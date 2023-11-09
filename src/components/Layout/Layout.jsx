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
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <NavLink
                isActive={isActiveLink}
                className='nav-link text-info'
                aria-current='page'
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                isActive={isActiveLink}
                className='nav-link text-info'
                to='/movies'
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
};

export default Layout;
