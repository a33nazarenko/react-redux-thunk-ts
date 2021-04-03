import { combineReducers } from 'redux';
import { TestReducer } from './test/reducers';

const rootReducer  = combineReducers({
    testReducer: TestReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>