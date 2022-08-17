import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';
import '../styles/Book.css';

function Book(props) {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const bookRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div className="book-info">
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <div className="btn-control">
          <button type="button">Comment</button>
          <div className="divider"></div>
          <button type="button" onClick={bookRemove}>
            Remove
          </button>
          <div className="divider"></div>
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
