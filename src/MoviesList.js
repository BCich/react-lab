export default function MoviesList(props) {
    if (props.movies.length === 0) {
        return <div>Brak filmów w bazie!</div>;
    }

    return (
        <div>
            <h2>Titles</h2>
            <ul>
                {props.movies.map(movie => (
                    <li key={movie.title}>{movie.title} ({movie.year})</li>
                ))}
            </ul>
        </div>
    );
}