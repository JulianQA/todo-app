import React from 'react'

function ToDoSearch({ search, setSearch }) {
    return (
        <input
            className='todo__input'
            placeholder='Search task...'
            value={search}
            onChange={(event) => {
                console.log(event.target.value)
                setSearch(event.target.value);
            }} />
    )
};

export { ToDoSearch };