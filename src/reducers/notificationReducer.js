import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.content = `you voted "${action.payload}"`;
    },
    resetNotification(state) {
      state.content = ``;
    },
  },
});

export const { setNotification, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
