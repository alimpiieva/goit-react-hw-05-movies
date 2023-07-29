import { Link, useLocation } from "react-router-dom";
import { useState , useEffect} from "react";
import getPopularMovies from "components/Api/Api";


const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setPopularMovies(movies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };
        fetchPopularMovies();
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {popularMovies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HomePage;
