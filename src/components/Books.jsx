import { useSelector } from 'react-redux';
import Book from './Book';
import AddBooks from './AddBooks';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBooks />
    </div>
  );
}

export default Books;
