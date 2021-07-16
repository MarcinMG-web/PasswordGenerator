import { combineReducers } from 'redux';

import passwordReducer from './password/passwordReducer'


const rootReducer = combineReducers({
  passwordReducer: passwordReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

