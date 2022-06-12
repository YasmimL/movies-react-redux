import { fetchMovies } from "./fetchMovies";
import { favoriteMovie } from "./favoriteMovie";
import { unfavoriteMovie } from "./unfavoriteMovie";
import { selectMovie } from "./selectMovie";
import { unselectMovie } from "./unselectMovie";

const actions = {
  fetchMovies,
  favoriteMovie,
  unfavoriteMovie,
  selectMovie,
  unselectMovie,
};

export default actions;
