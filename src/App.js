import {useState} from "react";
import "./App.css";

function App() {
    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];

    const [title, setTitle] = useState('Wall-E');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleClick() {
        alert(title);
    }

    let message;

    if (title.length < 5) {
        message = "Tytuł jest za krótki. Nagrywają takie filmy?";
    } else if (title.length < 15) {
        message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
    } else {
        message = "Tytuł jest za długi, nikt tego nie zapamięta.";
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h3>Titles</h3>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            <p>{message}</p>
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={handleClick}>Pokaż tytuł filmu</button>
        </div>
    );
}

export default App;