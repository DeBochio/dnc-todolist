import "./scss/app.scss";
import { Header } from "./Header";
import Confirm from "./Components/Confirm";
import Task from "./Components/Task";
import Addtasks from "./Components/Addtasks";
import { DB } from "./mock/todolist";
import React, { useReducer, useState, useRef } from "react";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLED_TODO: "toglle-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
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
    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.name, completed: false };
        }
        return todo;
      });
  }
}

function newTodo(name) {
  return { id: Date.now(), title: name, completed: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, DB);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [operation, setOperation] = useState("");
  const inputAdd = useRef();

  function handleSubmit(e) {
    if (id === "") {
      e.preventDefault();
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      setName("");
    } else if (id) {
      e.preventDefault();
      setOperation("Edit");
    }
  }

  function handleEdit(title, id) {
    setName(title);
    inputAdd.current.focus();
    setId(id);
  }

  function handleDelete(id) {
    setOperation("Delete");
    setId(id);
  }

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
                setName={setName}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
          <Addtasks
            inputAdd={inputAdd}
            handleSubmit={handleSubmit}
            setName={setName}
            name={name}
            id={id}
            setId={setId}
          />
        </div>
      </div>
      {operation && (
        <Confirm
          operation={operation}
          setOperation={setOperation}
          dispatch={dispatch}
          setName={setName}
          setId={setId}
          name={name}
          id={id}
        />
      )}
    </>
  );
}

export default App;
