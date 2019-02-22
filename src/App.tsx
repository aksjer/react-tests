import React, { useState } from 'react';
import './App.css';
import Navbar from './test3/navbar';
import List from './todo/list';
export default function App() {
  const [todos, setTodos] = useState(['abc', 'me', 'you']);

  const addTodo = (todo: string) => setTodos([...todos, todo]);

  const deleteTodo = (todo: string) => setTodos(todos.filter(t => t !== todo));

  const EmptyTodos = () => {
    return todos.length ? (
      <List todos={todos} deleteTodo={deleteTodo} />
    ) : (
      <div>Nothing to do...</div>
    );
  };

  const Allo = {
    Toto: function() {
      return <div>I'm Toto :)</div>;
    }
  };

  return (
    <>
      {/* <Create add={addTodo} />
      <EmptyTodos />
      <MouseTracker /> */}
      {/* <PlanList /> */}
      {/* <ParentContainer
        render={() => <div>hello, i'm new renderer method</div>}
        // render={() => <ChildCpt>hello, i'm new renderer method</ChildCpt>}
      >
        <div>i'm child ?</div>
        <div>i'm second child ?</div>
      </ParentContainer>
      <Allo.Toto /> */}
      <Navbar />
    </>
  );
}
