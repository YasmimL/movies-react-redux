import axios from "axios";
import actions from "../redux/actions";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8035f82c9cb3f656070b39b48d9cd665";

export default class Api {
  constructor() {
    this.client = null;
  }

  init = () => {
    const headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: API_URL,
      timeout: 30 * 1000,
      headers,
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
      },
    });

    return this.client;
  };

  fetchMovies = (dispatch) => {
    return this.init()
      .get("/discover/movie")
      .then((response) => {
        dispatch(actions.fetchMovies(response.data.results));
      })
      .catch((error) => {
        throw error;
      });
  };
}
