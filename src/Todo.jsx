import "./scss/todo.scss";
import { Header } from "./Header";
import { Task } from "./Components/Task";
import { Addtasks } from "./Components/Addtasks";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Todo({
  data,
  setData,
  isDelet,
  isEdit,
  setIsdelet,
  setIsEdit,
}) {
  const location = useLocation();

  useEffect(() => {
    if (isDelet) {
      delet(location.state.id);
    }
  }, [isDelet]);

  function updateList(id, task) {
    if (isEdit) {
      const newData = data.map((tasks) => {
        if (tasks.id == location.state.id) {
          console.log(task);
          return { id: tasks.id, title: task, completed: false };
        }
        setIsEdit(false);
        return tasks;
      });
      setData(newData);
    } else {
      setData((current) => {
        return [...current, { id, title: task, completed: false }];
      });
    }
  }

  function delet(id) {
    setIsdelet(false);
    setData((current) => {
      return current.filter((item) => item.id !== id);
    });
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
          <ul>
            {data.map((prod) => (
              <li key={prod.id}>
                <Task id={prod.id} task={prod.title} status={prod.completed} />
              </li>
            ))}
            <li>
              <Addtasks
                updateList={updateList}
                title={isEdit ? location.state.task : ""}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
