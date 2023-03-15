import React from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
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
      <MdAdd size={20} />
    </button>
  );
}

export { NewToDoButton };
