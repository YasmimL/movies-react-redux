const inititalState = {
  allMovies: [],
  favorites: [],
  selectedMovie: null,
};

const moviesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES": {
      return {
        ...state,
        allMovies: [...action.payload],
      };
    }
    case "FAVORITE_MOVIE": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case "UNFAVORITE_MOVIE": {
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    }
    case "SELECT_MOVIE": {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    }
    case "UNSELECT_MOVIE": {
      return {
        ...state,
        selectedMovie: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
