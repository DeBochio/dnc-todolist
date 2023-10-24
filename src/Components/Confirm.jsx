import React from "react";
import { ACTIONS } from "../App";
import "../scss/confirm.scss";

function Confirm({
  operation,
  setOperation,
  dispatch,
  id,
  name,
  setName,
  setId,
}) {
  function handleConfirm() {
    if (operation === "Edit") {
      dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: id, name: name } });
      setName("");
      setOperation("");
      setId("");
    } else if (operation === "Delete") {
      console.log(id);
      dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
      setOperation("");
    }
  }
  function handleDenail() {
    setName("");
    setOperation("");
  }
  return (
    <div className="confirm_span">
      <div className="confirm_span_container">
        <h1>Are you sure you want to {operation} ?</h1>
        <div>
          <button onClick={() => handleConfirm()}>yes</button>
          <button onClick={() => handleDenail()}>No.</button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
