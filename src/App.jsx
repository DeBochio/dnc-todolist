import "./scss/app.scss";
import { Header } from "./Header";
import Task from "./Components/Task";
import Addtasks from "./Components/Addtasks";
import { DB } from "./mock/todolist";
import React, { useReducer, useState } from "react";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLED_TODO: "toglle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLED_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), title: name, completed: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, DB);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);
  return (
    <>
      <Header />
      <div className="todo">
        <h1>Optimize your time and get organized with our daily planning</h1>
        <div className="todo__tasks">
          <div className="todo__title">
            <span>Task</span>
            <span>Status</span>
            <span>Options</span>
          </div>
          <hr />
          {todos.map((todo) => {
            return (
              <Task
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                dispatch={dispatch}
              />
            );
          })}
          <Addtasks handleSubmit={handleSubmit} setName={setName} name={name} />
        </div>
      </div>
    </>
  );
}

export default App;
