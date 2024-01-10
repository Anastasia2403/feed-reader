import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user.types';

const initialState: User | {} = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { user: User }) => state.user;

export default userSlice.reducer;
