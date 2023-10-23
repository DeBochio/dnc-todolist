import "../scss/addtask.scss";
import React, { useState } from "react";

export default function Addtasks({ handleSubmit, setName, name }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        placeholder="Nova tarefa..."
      />

      <button>+</button>
    </form>
  );
}
