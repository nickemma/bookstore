import React from 'react';

function AddBooks() {
  return (
    <div className="hero">
      <h3>ADD NEW BOOK</h3>
        <input type="text" placeholder='Book Title' />
        <input type="text" placeholder='Book Author' />
        <button type="button">ADD BOOK</button>
    </div>
  );
}

export default AddBooks;
