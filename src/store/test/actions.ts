import * as types from './types';

export const setIncrement = (payload: types.Test): types.TestActionTypes => ({ type: types.INCREMENT, payload});
export const setDecrement = (payload: types.Test): types.TestActionTypes => ({ type: types.DECREMENT, payload});