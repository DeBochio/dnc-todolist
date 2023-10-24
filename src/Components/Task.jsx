import { useState } from "react";
import "../scss/task.scss";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { ACTIONS } from "../App";

export default function Task({
  handleEdit,
  id,
  title,
  completed = "",
  dispatch,
}) {
  const [checked, setCheked] = useState(completed);

  function handleChange() {
    dispatch({ type: ACTIONS.TOGGLED_TODO, payload: { id: id } });
    setCheked(!checked);
  }

  return (
    <div className="task">
      <span
        style={{
          color: completed ? "#AAA" : "#FFF",
          textDecoration: completed && "line-through",
        }}
      >
        {title}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChange()}
      />
      <div className="task__icons">
        <FaRegEdit className="btn-edit" onClick={() => handleEdit(title, id)} />

        <FaTrash
          className="btn-trash"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })
          }
        />
      </div>
    </div>
  );
}
