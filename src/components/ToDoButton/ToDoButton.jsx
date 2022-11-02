import React from 'react'
import { useNavigate } from 'react-router-dom'

function ToDoButton() {
    const navigate = useNavigate();
    return (
        <button className='todo__button'
            onClick={() => {
                navigate('/new');
            }}>+
        </button>
    )
}

export { ToDoButton }