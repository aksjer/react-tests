import React from 'react';
import Item from './item';

export default function List(props: any) {
  const items = props.todos.map((t: string) => (
    <Item key={t} todo={t} deleteTodo={props.deleteTodo} />
  ));
  return <ul>{items}</ul>;
}
