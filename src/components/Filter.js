import { connect } from 'react-redux';
import { filter } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (event) => {
    const content = event.target.value;
    props.filter(content);
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

export default connect(null, { filter })(Filter);
