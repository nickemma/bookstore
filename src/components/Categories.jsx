import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../redux/categories/categories';

function Categories() {
  const alert = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusChecker = () => {
    dispatch(checkStatusBook());
  };
  return (
    <div className="check">
      <button onClick={statusChecker} type="button">
        Check status
      </button>
      <h4>{alert}</h4>
    </div>
  );
}

export default Categories;
