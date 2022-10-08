import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdotForm = (props) => {
  const createAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.addAnecdote(content);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default connect(null, { addAnecdote })(AnecdotForm);
