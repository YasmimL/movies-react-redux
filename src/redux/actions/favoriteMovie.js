export const favoriteMovie = (movie) => {
  return {
    type: "FAVORITE_MOVIE",
    payload: movie,
  };
};
