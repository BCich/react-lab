import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');
    
    function handleChange(event) {
        setTitle(event.target.value);
    }
    
    function getMessage() {
        if (title.length < 5) {
            return "Tytuł jest za krótki (min. 5 znaków)";
        }
        if (title.length > 15) {
            return "Tytuł jest za długi (max. 15 znaków)";
        }
        return null;
    }
    
    const message = getMessage();
    
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <input type="text" value={title} onChange={handleChange}/>
            {message && <p style={{color: 'red'}}>{message}</p>}
        </div>
    );
}

export default App;
