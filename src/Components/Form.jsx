import React from 'react';

function Form() {
  return(
    <div>
    <form>
    <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book" />
      <input type="text" placeholder="Author" />
      <button type="button">Add Book</button>
    </form> 
    </div>
    );
}

export default Form;
