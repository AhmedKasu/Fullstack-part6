import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ message: '' }];

const notificationSlice = createSlice({
  name: 'notificaion',
  initialState,
  reducers: {
    setNotification(state, action) {
      const notification = action.payload;
      state[0] = { message: notification };
    },
    resetNotification(state, action) {
      return (state = initialState);
    },
  },
});

export const notify = (notificationObject) => {
  return (dispatch) => {
    const resetTime = notificationObject.resetSeconds * 100;
    dispatch(setNotification(notificationObject.message));

    setTimeout(() => {
      dispatch(resetNotification());
    }, resetTime);
  };
};

export const { setNotification, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
