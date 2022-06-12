export const unfavoriteMovie = (movie) => {
  return {
    type: "UNFAVORITE_MOVIE",
    payload: movie,
  };
};
