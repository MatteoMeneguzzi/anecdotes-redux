import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: 'voted anecdotes',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state) {
      return state;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
