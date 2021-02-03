import { TRootState } from '../store';
import { IConfig, THasDividers, TLength } from './config.interfaces';

export const selectConfig = (state: TRootState): IConfig => state.config;
export const selectLength = (state: TRootState): TLength => state.config.length;
export const selectHasDividers = (state: TRootState): THasDividers => state.config.hasDividers;
