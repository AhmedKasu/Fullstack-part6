import { useDispatch, useSelector } from 'react-redux';
import { voteAction } from '../reducers/anecdoteReducer';
import { notify } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterValue = useSelector((state) => state.filter).toLowerCase();

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const sortedAndFiltered = sortedAnecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterValue)
  );

  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(voteAction(anecdote.id));
    dispatch(notify(anecdote.content));
  };

  return (
    <div>
      {sortedAndFiltered.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
