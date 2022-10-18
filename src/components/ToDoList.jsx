import React from 'react'

function ToDoList(props) {
    return (
        <section className='todo__container'>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { ToDoList }