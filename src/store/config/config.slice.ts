import { createSlice } from '@reduxjs/toolkit';
import defaultConfig from '../../default.config';

export const configSlice = createSlice({
    name: 'config',
    initialState: defaultConfig,
    reducers: {
        setConfig: (state, action) => {
            return action.payload;
        },
        setLength: (state, action) => {
            return {
                ...state,
                length: action.payload,
            };
        },
        setHasDividers: (state, action) => {
            return {
                ...state,
                hasDividers: action.payload,
            };
        },
        resetConfig: () => {
            return defaultConfig;
        },
    },
});

export const { setConfig, setLength, setHasDividers, resetConfig } = configSlice.actions;
export default configSlice.reducer;
