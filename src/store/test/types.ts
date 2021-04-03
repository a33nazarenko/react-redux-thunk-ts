export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface Test {
    count: number
}

interface SetIncrement {
    type: typeof INCREMENT,
    payload: Test
}

interface SetDecrement {
    type: typeof DECREMENT,
    payload: Test
}

export type TestActionTypes = SetIncrement | SetDecrement;