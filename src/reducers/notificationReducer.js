import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ message: '' }];

const notificationSlice = createSlice({
  name: 'notificaion',
  initialState,
  reducers: {
    notify(state, action) {
      const notification = action.payload;
      state[0] = { message: `you voted '${notification}'` };
    },
    resetNotification(state, action) {
      return (state = initialState);
    },
  },
});

export const { notify, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
