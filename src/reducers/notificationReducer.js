import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationVote(state, action) {
      state.content = `you voted "${action.payload}"`;
    },
    resetNotificationVote(state) {
      state.content = ``;
    },
    setNotificationCreation(state, action) {
      state.content = `you created "${action.payload}"`;
    },
    resetNotificationCreation(state) {
      state.content = ``;
    },
  },
});

export const {
  setNotificationVote,
  resetNotificationVote,
  setNotificationCreation,
  resetNotificationCreation,
} = notificationSlice.actions;
export default notificationSlice.reducer;
