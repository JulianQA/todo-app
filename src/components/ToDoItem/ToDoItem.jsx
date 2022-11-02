import React from 'react'

function ToDoItem(props) {
    return (
        <li>
            <span onClick={props.toCompleteToDos}>✔️</span>
            <p className={`toDoItem__p ${props.isCompleted && 'completed'}`}>{props.text}</p>
            <span onClick={props.toEditToDo}>Edit</span>
            <span onClick={props.toDeleteToDo}>✖️</span>
        </li>
    )
}

export { ToDoItem };