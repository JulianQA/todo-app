import React from "react";
import { useNavigate } from "react-router-dom";
import "./newToDoButton.css";

function NewToDoButton() {
  const navigate = useNavigate();
  return (
    <button
      className="NewToDoButton"
      onClick={() => {
        navigate("/new");
      }}
    >
      +
    </button>
  );
}

export { NewToDoButton };
