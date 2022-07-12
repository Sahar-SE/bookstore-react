// Actions
const ADD_BOOK = 'bookstore-react/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/booksReducer/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.payload);
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.payload));
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(bookID) {
  return { type: REMOVE_BOOK, payload: bookID };
}