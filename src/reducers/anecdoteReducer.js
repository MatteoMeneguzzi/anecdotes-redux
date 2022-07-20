import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // createAnecdote(state, action) {
    //   state.push(action.payload);

    //   return state.sort((a, b) => b.votes - a.votes);
    // },
    voteAnecdote(state, action) {
      const id = action.payload;

      const anecdoteToVote = state.find((n) => n.id === id);

      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };

      const newState = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );

      return newState.sort((a, b) => b.votes - a.votes);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
      return state.sort((a, b) => b.votes - a.votes);
    },
    setAnecdotes(state, action) {
      return action.payload.sort((a, b) => b.votes - a.votes);
    },
  },
});

export const { voteAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateVote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.handleVote(anecdote);
    dispatch(voteAnecdote(newAnecdote.id));
  };
};

export default anecdoteSlice.reducer;
