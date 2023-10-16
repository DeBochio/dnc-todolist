import { useState } from "react";
import "../scss/task.scss";
import { FaRegEdit, FaTrash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export function Task({ id, task, status }) {
  const [checked, setCheked] = useState(status);
  const navigate = useNavigate();
  return (
    <div className="task">
      <span>{task}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setCheked(!checked)}
      />
      <div className="task__icons">
        <FaRegEdit
          className="btn-edit"
          onClick={() => {
            navigate("confirm", { state: { id, task, type: "edit" } });
          }}
        />

        <FaTrash
          className="btn-trash"
          onClick={() => {
            navigate("confirm", { state: { id, task, type: "delet" } });
          }}
        />
      </div>
    </div>
  );
}
