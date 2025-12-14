import {useState} from "react";

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
    
    function getMessage() {
        if (title.length < 5) {
            return {text: "Tytuł jest za krótki (min. 5 znaków)", color: "red"};
        }
        if (title.length > 15) {
            return {text: "Tytuł jest za długi (max. 15 znaków)", color: "red"};
        }
        return {text: "Tytuł jest ekstra, w sam raz na plakat przed kinem!", color: "green"};
    }
    
    const message = getMessage();
    
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <p style={{color: message.color}}>{message.text}</p>
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={handleClick}>Pokaż tytuł filmu</button>
            
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
        </div>
    );
}

export default App;