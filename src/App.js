import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Api from "./helpers/Api";
import Header from "./components/Header";
import CardMovie from "./components/CardMovie";

const useFetching = (actionCreator) => {
  const dispatch = useDispatch();
  useEffect(() => {
    actionCreator(dispatch);
  }, []);
};

const api = new Api();

function App() {
  const movies = useSelector((state) => state);
  useFetching(api.fetchMovies);

  return (
    <div className="App">
      <Header></Header>
      <div className="page-title">
        <h1>Filmes Populares</h1>
      </div>

      <ul className="movies">
        {movies.map((movie, index) => (
          <li className="movie" key={`${index}-${movie.id}`}>
            <CardMovie movie={movie}></CardMovie>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
