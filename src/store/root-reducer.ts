import { combineReducers } from 'redux'
import * as reducers from './reducers';

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  ...reducers
})