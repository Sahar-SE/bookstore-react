import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/Books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const deleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <p className="book-categorie">Category</p>
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => deleteBook(id)}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-text">
          <p>50%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-update">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
     );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
