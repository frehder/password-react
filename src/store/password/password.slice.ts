import { createSlice } from '@reduxjs/toolkit';
import { defaultPassword } from '../../default.config';

export const passwordSlice = createSlice({
    name: 'password',
    initialState: defaultPassword,
    reducers: {
        setPassword: (state, action) => action.payload,
    },
});

export const { setPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
