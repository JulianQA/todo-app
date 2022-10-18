import React from 'react'

function ToDoButton() {
    return (
        <button className='todo__button'
            onClick={() => {
                alert('aquí debería abrirse el modal');
            }}>+
        </button>
    )
}

export { ToDoButton }