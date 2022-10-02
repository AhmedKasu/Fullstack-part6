import { useSelector, useDispatch } from 'react-redux';
import AnecdotForm from './components/AnecdoteForm';
import { voteAction, createAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => b.votes - a.votes)
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAction(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <AnecdotForm />
    </div>
  );
};

export default App;
