import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setIncrement, setDecrement } from './store/test/actions';

function App() {
  const dispatch = useDispatch();
  const testState = useSelector((state: RootState) => state.testReducer);

  return (
    <div className="App">
      App
      {testState.count}
      <button onClick={() => dispatch(setIncrement({ count: 1 }))}>increment</button>
      <button onClick={() => dispatch(setDecrement({ count: 1 }))}>decrement</button>
    </div>
  );
}

export default App;
