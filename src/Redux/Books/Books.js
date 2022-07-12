// Actions
const ADD_BOOK = 'bookstore-react/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/booksReducer/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = [
  {
    id: 1,
    title: 'test1',
    author: 'test1',
  },
  {
    id: 2,
    title: 'test2',
    author: 'test2',
  },
], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.data);
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.data));
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD_BOOK, data: book };
}

export function removeBook(bookID) {
  return { type: REMOVE_BOOK, data: bookID };
}