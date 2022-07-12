import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../Redux/Books/Books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(
        addBook({
          id: books.length + 1,
          title,
          author,
        }),
      );
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div id="form-container">
      <form onSubmit={formSubmit}>
        <input type="text" id="title" placeholder="Book title" value={title} onChange={changeTitle} />
        <input type="text" id="author" placeholder="Book author" value={author} onChange={changeAuthor} />
        <button type="submit" id="add-book">
          ADD BOOK
        </button>
      </form>
    </div>
  );
    };

export default Form;
