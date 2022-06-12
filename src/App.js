import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardMovie from "./components/CardMovie";
import Header from "./components/Header";
import ModalDetails from "./components/ModalDetails";
import ModalFavorites from "./components/ModalFavorites";
import Api from "./helpers/Api";
import actions from "./redux/actions";

import "./App.css";

const api = new Api();

function showDetails(dispatch, movie, setIsOpen) {
  dispatch(actions.selectMovie(movie));
  setIsOpen(true);
}

function closeDetails(dispatch, setModalIsOpen) {
  dispatch(actions.unselectMovie());
  setModalIsOpen(false);
}

function toggleFavorite(dispatch, movie, favorites) {
  if (favorites.some((it) => it.id === movie.id)) {
    dispatch(actions.unfavoriteMovie(movie));
  } else {
    dispatch(actions.favoriteMovie(movie));
  }
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.fetchMovies(dispatch);
  }, []);
  const { allMovies: movies, favorites } = useSelector((state) => state);

  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);
  const [modalFavoritesIsOpen, setModalFavoritesIsOpen] = useState(false);

  return (
    <div className="App">
      <Header onClickFavorites={() => setModalFavoritesIsOpen(true)}></Header>
      <div className="page-title">
        <h1>Filmes Populares</h1>
      </div>

      <ul className="movies">
        {movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <CardMovie
              movie={movie}
              onClickDetails={(movie) =>
                showDetails(dispatch, movie, setModalDetailsIsOpen)
              }
            ></CardMovie>
          </li>
        ))}
      </ul>
      <ModalDetails
        modalIsOpen={modalDetailsIsOpen}
        closeModal={() => closeDetails(dispatch, setModalDetailsIsOpen)}
        onToggleFavorite={(movie) => toggleFavorite(dispatch, movie, favorites)}
      ></ModalDetails>
      <ModalFavorites
        modalIsOpen={modalFavoritesIsOpen}
        closeModal={() => setModalFavoritesIsOpen(false)}
        onRemoveMovie={(movie) => toggleFavorite(dispatch, movie, favorites)}
      ></ModalFavorites>
    </div>
  );
}

export default App;
