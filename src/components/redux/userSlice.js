import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'John Doe',
  email: 'john.doe@bank.com',
  notifications: {
    email: true,
    sms: false,
  },
  status: 'Idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleEmailNotifications: (state) => {
      state.notifications.email = !state.notifications.email;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    startTransfer: (state) => {
      state.status = 'Transfer started...';
    },
  },
});

export const { toggleEmailNotifications, setStatus, startTransfer } = userSlice.actions;
export default userSlice.reducer;
