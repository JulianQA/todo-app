import React from 'react'
import { useNavigate } from 'react-router-dom';

function ToDoItem({ toCompleteToDos, isCompleted, text, id, toDos, toDeleteToDo }) {
    const navigate = useNavigate();
    return (
        <li>
            <span onClick={toCompleteToDos}>✔️</span>
            <p className={`toDoItem__p ${isCompleted && 'completed'}`}>{text}</p>
            <span onClick={() => {
                navigate(`/edit/${id}`, {
                    state: {
                        toDos,
                    }
                });
            }
            }>
                Edit
            </span>
            <span onClick={toDeleteToDo}>✖️</span>
        </li>
    )
}

export { ToDoItem };