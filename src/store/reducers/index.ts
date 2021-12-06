import { combineReducers } from 'redux';
import SampleReducer from './sample';
import PongReducer from './pong';

const reducers = combineReducers({ SampleReducer, PongReducer });

export type RootState = ReturnType<typeof reducers>;
export default reducers;
