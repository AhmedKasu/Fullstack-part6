import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ message: '' }];

const notificationSlice = createSlice({
  name: 'notificaion',
  initialState,
  reducers: {
    setNotification(state, action) {
      const notification = action.payload.message;
      const timerId = action.payload.timerId;

      clearTimeout(timerId - 1);
      state[0] = { message: notification };
    },

    resetNotification(state, action) {
      return (state = initialState);
    },
  },
});

export const notify = (notificationObject) => {
  return (dispatch) => {
    const resetTime = notificationObject.resetSeconds * 1000;
    const message = notificationObject.message;

    const timerId = setTimeout(() => {
      dispatch(resetNotification());
    }, resetTime);

    dispatch(setNotification({ message, timerId }));
  };
};

export const { setNotification, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
