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
    voteAction(state, action) {
      const id = action.payload;
      const anecdote = state.find((a) => a.id === id);
      const index = state.indexOf(anecdote);
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      const anecdotes = [...state];
      anecdotes[index] = updatedAnecdote;
      return anecdotes;
    },
  },
});

export const { appendAnecdote, voteAction, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export default anecdoteSlice.reducer;
