import { combineReducers } from 'redux';
import SampleReducer from './sample';

const reducers = combineReducers({ SampleReducer });

export type RootState = ReturnType<typeof reducers>;
export default reducers;
