// Usando método legado createStore o qual não é recomendado.
// Redux Toolkit é a abordagem recomendada para código Redux atualmente.
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./reducers/moviesReducer";

const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;
