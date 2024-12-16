import Home from './pages/Home'
import Directors from './pages/Directors'
import Actors from './pages/Actors'
import MovieDetails from './pages/MovieDetails';
import ErrorPage from './pages/ErrorPage';

const routes = [
   {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: '/directors',
    element: <Directors />
   },
   {
    path: '/actors',
    element: <Actors />
   },
   {
    path: '/movie/:id',
    element: <MovieDetails />
   }
];

export default routes;