import React, { useState } from "react";
import { Todo } from "./Todo";
import { Confirm } from "./Confirm";
import { Route, Routes } from "react-router-dom";
import { DB } from "./mock/todolist";

function App() {
  const [data, setData] = useState(DB);
  const [isDelet, setIsdelet] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Todo
            data={data}
            setData={setData}
            isDelet={isDelet}
            isEdit={isEdit}
            setIsdelet={setIsdelet}
            setIsEdit={setIsEdit}
          />
        }
      />
      <Route
        path="/confirm"
        element={<Confirm setIsdelet={setIsdelet} setIsEdit={setIsEdit} />}
      />
    </Routes>
  );
}

export default App;
