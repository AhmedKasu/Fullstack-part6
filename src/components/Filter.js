import { useDispatch } from 'react-redux';
import { filter } from '../reducers/filterReducer';

const Filter = ({ anecdotes }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const content = event.target.value;
    dispatch(filter(content));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} />
    </div>
  );
};

export default Filter;