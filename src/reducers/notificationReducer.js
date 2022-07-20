import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.content = action.payload.content;
    },
    hideNotification(state) {
      state.content = '';
    },
  },
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export function showNotificationWithTimeout(text) {
  return (dispatch) => {
    dispatch(setNotification(text));

    setTimeout(() => {
      dispatch(hideNotification());
    }, text.timer);
  };
}

export default notificationSlice.reducer;
