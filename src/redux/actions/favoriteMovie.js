// action creator
export const favoriteMovie = (movie) => {
  // action
  return {
    type: "FAVORITE_MOVIE",
    payload: movie,
  };
};
