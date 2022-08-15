import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBOOK } from '../redux/books/books';

function AddBooks() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ title: '', author: '' });

  const changeState = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showState = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: form.title,
      author: form.author,
    };
    dispatch(addBOOK(book));
    setForm({ title: '', author: '' });
  };

  return (
    <div className="hero">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={showState}>
        <input
          type="text"
          value={form.title}
          onChange={changeState}
          placeholder="Book Title"
          name="title"
        />
        <input
          type="text"
          value={form.author}
          onChange={changeState}
          placeholder="Book Author"
          name="author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBooks;
