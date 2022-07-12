import { createStore, combineReducers } from 'redux';
import booksReducer from './Books/Books';
import categoriesReducer from './Catagories/Catagories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;