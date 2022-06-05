// Usando método legado createStore o qual não é recomendado.
// Redux Toolkit é a abordagem recomendada para código Redux atualmente.
import { legacy_createStore as createStore } from "redux";
import moviesReducer from "./reducers/movies-reducer";

const store = createStore(moviesReducer);

export default store;
