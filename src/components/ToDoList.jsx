import React from 'react'

function ToDoList(props) {
    return (
        <section className='todo__container'>
            {!props.totalToDos && props.onEmptyToDos()}
            {(!!props.totalToDos && !props.filterByToDos.length) && props.onEmptySearch(props.search)}
            <ul>
                {/* {props.filterByToDos.map(e => props.render(e))} */}
                {props.filterByToDos.map(e => props.children(e))}
            </ul>
        </section>
    )
}

export { ToDoList }