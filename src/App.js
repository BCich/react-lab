import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {
    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className='container'>
            <h1>My favourite movies to watch</h1>
            <MoviesList movies={movies}/>

            {showForm 
                ? <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
                : <button onClick={() => setShowForm(true)}>Dodaj film</button>
            }
        </div>
    );
}

export default App;