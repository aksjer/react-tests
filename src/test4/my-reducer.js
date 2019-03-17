import React, { createContext, useReducer } from 'react';
import Child1 from './child1';

export const DispatchProvider = createContext(null);

export default function MyReducer() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchProvider.Provider value={dispatch}>
      <div>my count : {state.count}</div>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
      <Child1 />
    </DispatchProvider.Provider>
  );
}
