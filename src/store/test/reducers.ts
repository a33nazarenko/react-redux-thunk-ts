import * as types from './types';

const initialState: types.Test = {
    count: 0
}

export const TestReducer = (state: types.Test = initialState, action: types.TestActionTypes): types.Test => {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + action.payload.count
            }
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - action.payload.count
            }
        default:
            return state
    }
}