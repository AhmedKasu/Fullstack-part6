import { createSlice } from '@reduxjs/toolkit';

const initialState = 'notification message';

const notificationSlice = createSlice({
  name: 'notificaion',
  initialState,
  reducers: {
    notify(notification, action) {
      return notification;
    },
  },
});

export const { notify } = notificationSlice.actions;
export default notificationSlice.reducer;
