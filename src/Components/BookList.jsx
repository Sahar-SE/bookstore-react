import React from 'react';
import Book from './Book';

function BookList() {
  return(
      <div>
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
      </div>
    );
}

export default BookList;
