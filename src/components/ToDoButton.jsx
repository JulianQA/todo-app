import React from 'react'

function ToDoButton({ isOpenModal, setIsOpenModal }) {
    return (
        <button className='todo__button'
            onClick={() => {
                isOpenModal ? setIsOpenModal(false) : setIsOpenModal(true);
            }}>+
        </button>
    )
}

export { ToDoButton }