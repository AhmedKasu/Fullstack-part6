import { useDispatch } from 'react-redux';
import { voteAction } from '../reducers/anecdoteReducer';
import { notify } from '../reducers/notificationReducer';

const AnecdoteList = ({ anecdotes }) => {
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(voteAction(anecdote.id));
    dispatch(notify(anecdote.content));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
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
