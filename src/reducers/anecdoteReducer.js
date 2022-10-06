import { createSlice } from '@reduxjs/toolkit';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    createAnecdote(state, action) {
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

export const { createAnecdote, voteAction, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
