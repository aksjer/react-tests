import React from 'react';

export default function Item({ todo, deleteTodo }: any) {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(todo)}>X</button>
    </li>
  );
}
