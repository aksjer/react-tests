import React from 'react';

export default function Create(props: any) {
  const handleClickEvent = () => {
    const value = todoRef.current.value;
    props.add(value);
    clearInput();
  };

  const clearInput = () => (todoRef.current.value = '');

  const todoRef: any = React.createRef();

  return (
    <>
      <input type="text" ref={todoRef} />
      <button type="button" onClick={handleClickEvent}>
        Add
      </button>
    </>
  );
}
