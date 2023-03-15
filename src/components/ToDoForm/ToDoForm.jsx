import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ToDoForm.css";

function ToDoForm({ submitEvent, textForm, textButton, textToEdit }) {
  const [newToDo, setNewToDo] = useState(textToEdit || "");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitEvent(newToDo);
    navigate("/");
  };
  const handleAddToDo = (event) => {
    setNewToDo(event.target.value);
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <label className="ToDoForm__label">{textForm}</label>
      <textarea
        className="ToDoForm__text-area"
        value={newToDo}
        onChange={handleAddToDo}
      ></textarea>
      <div className="ToDoForm__buttons">
        <button
          type="button"
          className="cancel-button"
          onClick={() => navigate("/")}
        >
          Cancelar
        </button>
        <button type="submit" className="add-button">
          {textButton}
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
