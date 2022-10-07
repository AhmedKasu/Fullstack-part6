import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    registerVote(state, action) {
      const votedAnecdote = action.payload;
      const index = state.findIndex(
        (anecdote) => anecdote.id === votedAnecdote.id
      );
      state[index] = votedAnecdote;

      return state;
    },
  },
});

export const { appendAnecdote, registerVote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const addAnecdote = (content) => {
  return async (dispatch) => {
    const anecdoteToAdd = await anecdotesService.createNew(content);
    dispatch(appendAnecdote(anecdoteToAdd));
  };
};

export const voteAction = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    const votedAnecdote = await anecdotesService.update(updatedAnecdote);
    dispatch(registerVote(votedAnecdote));
  };
};

export default anecdoteSlice.reducer;
