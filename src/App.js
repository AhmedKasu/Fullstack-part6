import { useSelector } from 'react-redux';
import AnecdotForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filteredAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList anecdotes={filteredAnecdotes} />
      <AnecdotForm />
    </div>
  );
};

export default App;
