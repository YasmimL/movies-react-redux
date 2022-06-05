const inititalState = ["aaaa", "bbbb"];

const moviesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES": {
      return [...state, ...action.payload];
    }
  }

  return state;
};

export default moviesReducer;
