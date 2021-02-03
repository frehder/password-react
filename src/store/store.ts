import { configureStore } from '@reduxjs/toolkit';
import defaultConfig, { defaultPassword } from '../default.config';
import configReducer from './config/config.slice';
import passwordReducer from './password/password.slice';

export const initialState = {
    password: defaultPassword,
    config: defaultConfig,
};

const rootReducer = {
    password: passwordReducer,
    config: configReducer,
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export type TRootState = typeof initialState;
export default store;
