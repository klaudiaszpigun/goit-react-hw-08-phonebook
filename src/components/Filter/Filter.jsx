import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors/selectors';
import { setFilter } from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const value = evt.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h1>Search contact</h1>
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        placeholder="Enter name"
        value={useSelector(selectFilter)}
      />
    </div>
  );
};

export default Filter;
