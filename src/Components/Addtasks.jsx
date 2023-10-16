import "../scss/addtask.scss";
import React, { useState } from "react";

export function Addtasks({ updateList, title = "" }) {
  const [task, setTask] = useState(title);

  function addTask(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    updateList(id, task);
    setTask("");
  }

  return (
    <form>
      <input
        autoFocus
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
        placeholder="Nova tarefa..."
      />

      <button onClick={addTask}>+</button>
    </form>
  );
}
