import { createStore, combineReducers } from 'redux';
import booksReducer from './Books/Books';
import categoriesReducer from './Catagories/Catagories';

const allReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(allReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;