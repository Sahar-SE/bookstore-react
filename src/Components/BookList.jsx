import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <section id="books-page">
    {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
     <Form />
    </section>
  );
  }

export default BookList;
