const inititalState = [];

const moviesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES": {
      return [...state, ...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
