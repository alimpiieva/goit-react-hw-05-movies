import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getPopularMovies from "components/Api/Api";

const Movies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';

    useEffect(() => {
        if (movieId !== '') {
            const fetchPopularMovies = async () => {
                try {
                    const movies = await getPopularMovies();
                    setPopularMovies(movies);
                } catch (error) {
                    console.error("Not found:", error);
                }
            };
            fetchPopularMovies();
        }
        }, [movieId]);

    const visibleMovies = popularMovies.filter(movie => movie.title.includes(movieId));

    const updateQueryString = evt => {
        const movieIdValue = evt.target.value;
        if (movieIdValue === "") {
            return setSearchParams({});
        }
        setSearchParams({ movieId: movieIdValue });
    };

    const handleSearch = () => {
        setSearchParams({ movieId });
    };

    return (
        <div>
            <input
                type="text"
                value={movieId}
                onChange={updateQueryString}
            />
            <button onClick={handleSearch}>Search</button>
            <hr/>
            <ul>
                {visibleMovies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <hr/>
        </div>
    );
};

export default Movies;
