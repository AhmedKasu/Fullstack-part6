import { useSelector, useDispatch } from 'react-redux';
import AnecdotForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import { voteAction, createAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => b.votes - a.votes)
  );

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} />
      <AnecdotForm />
    </div>
  );
};

export default App;
