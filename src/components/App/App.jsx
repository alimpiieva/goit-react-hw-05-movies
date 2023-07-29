import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout.jsx';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Home.jsx'));
const Movies = lazy(() => import('pages/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails.jsx'));
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));
const ErrorPage = lazy(() => import('pages/ErrorPage.jsx'));

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId/' element={<MovieDetails />}>
            <Route  path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route> 
        </Route>
      <Route path='*' element={<ErrorPage/>} />
      </Routes>
   
  );
};

export default App; 