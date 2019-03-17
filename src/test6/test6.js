import React, {
  useCallback,
  useEffect,
  useReducer,
  useState,
  useMemo
} from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'tick':
      return { ...state, count: state.count + state.step };
    case 'step':
      return { ...state, step: action.payload };
  }
}

export default function Test6() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  const [query, setQuery] = useState('me');

  const getFetch = useCallback(query => 'hello, my query is :' + query, [
    query
  ]);

  const color = useMemo(() => {
    console.log('useMemo!');
    return { hello: `it's me`, query };
  }, [query]);
  console.log(color);

  useEffect(() => {
    setTimeout(() => setQuery('yeah'), 5000);
    // const intervalId = setInterval(() => {
    //   dispatch({ type: 'tick' });
    // }, 5000);
    // return () => {
    //   clearInterval(intervalId);
    // };
    // }, [dispatch]);
    console.log('useEffect', getFetch);
    return () => {
      console.log('destroy', getFetch);
    };
  }, [getFetch]);

  function handleStepChange(e) {
    dispatch({ type: 'step', payload: +e.target.value });
  }

  return (
    <>
      <h1>{count}</h1>
      <input type="number" value={step} onChange={handleStepChange} />
    </>
  );
}
