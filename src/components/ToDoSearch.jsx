import React from 'react'

function ToDoSearch() {
    return (
        <input
            className='todo__input'
            placeholder='Search task...'
            onChange={(event) => {
                console.log(event.target.value);
            }}></input>
    )
};

export { ToDoSearch };