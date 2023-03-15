import React from "react";
import { useNavigate } from "react-router-dom";
import "./toDoItem.css";

function ToDoItem({
  toCompleteToDos,
  isCompleted,
  text,
  id,
  toDos,
  toDeleteToDo,
}) {
  const navigate = useNavigate();
  return (
    <li className="ToDoItem">
      <span onClick={toCompleteToDos}>✔️</span>
      <p className={`ToDoItem__text ${isCompleted && "completed"}`}>{text}</p>
      <span
        onClick={() => {
          navigate(`/edit/${id}`, {
            state: {
              toDos,
            },
          });
        }}
      >
        Edit
      </span>
      <span onClick={toDeleteToDo}>✖️</span>
    </li>
  );
}

export { ToDoItem };
