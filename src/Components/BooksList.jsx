import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { displayBooks } from '../Redux/Books/Books';

const BooksList = () => {
  const dispatch = useDispatch();
  dispatch(displayBooks());
  const books = useSelector((state) => state.books);
  return (
    <section id="books-page">
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <hr />
      <Form />
    </section>
  );
};
export default BooksList;
