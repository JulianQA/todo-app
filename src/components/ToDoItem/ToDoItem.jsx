import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
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
      <p className={`ToDoItem__text ${isCompleted && "completed"}`}>{text}</p>
      <span
        onClick={() => {
          navigate(`/edit/${id}`, {
            state: {
              toDos,
            },
          });
        }}
        className="ToDoItem__edit"
      >
        Edit
      </span>
      <MdDone size={20} onClick={toCompleteToDos} className="ToDoItem__icon" />
      <AiFillDelete
        size={20}
        onClick={toDeleteToDo}
        className="ToDoItem__icon"
      />
    </li>
  );
}

export { ToDoItem };
