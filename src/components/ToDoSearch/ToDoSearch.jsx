import React from 'react'

function ToDoSearch({ search, setSearch }) {
    return (
        <input
            className='todo__input'
            placeholder='Search task...'
            value={search}
            onChange={(event) => {
                setSearch(event.target.value);
            }} />
    )
};

export { ToDoSearch };