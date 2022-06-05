import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const movies = useSelector((state) => state);

  return (
    <div className="App">
      {movies.map((movie) => (
        <h1>{movie}</h1>
      ))}
    </div>
  );
}

export default App;
