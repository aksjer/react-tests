import React, { useContext } from 'react';
import { DispatchProvider } from './my-reducer';

export default function Child2() {
  const dispatch = useContext(DispatchProvider);
  return (
    <>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
        Dispatch work ? RESET !
      </button>
    </>
  );
}
