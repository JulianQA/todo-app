import React from 'react'

function ToDoItem(props) {
    return (
        <li>
            <span onClick={() => {
                alert(`Completaste el ToDo: ${props.text}`);
            }}>✔️</span>
            <p>{props.text}</p>
            <span onClick={() => {
                alert(`Borraste el ToDo: ${props.text}`);
            }}>✖️</span>
        </li>
    )
}

export { ToDoItem };