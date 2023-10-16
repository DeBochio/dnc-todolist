import React from "react";
import { Header } from "./Header";
import "./scss/confirm.scss";
import { useLocation, useNavigate } from "react-router-dom";

export function Confirm({ setIsdelet, setIsEdit }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleConfirm() {
    if (location.state.type == "delet") {
      setIsdelet(true);
      navigate("/", { state: { id: location.state.id } });
    } else if (location.state.type == "edit") {
      setIsEdit(true);

      navigate("/", {
        state: { id: location.state.id, task: location.state.task },
      });
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1>Optimize your time and get organized with our daily planning</h1>
        <div className="container__info">
          <h3>Want to {location.state.type} this iten?</h3>
          <p>{location.state.task}</p>
          <div className="container__btn">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>

            <button onClick={handleConfirm} className="container__btn-yes">
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
