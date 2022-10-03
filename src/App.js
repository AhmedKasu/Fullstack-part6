import { useSelector } from 'react-redux';
import AnecdotForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.sort((a, b) => b.votes - a.votes)
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
