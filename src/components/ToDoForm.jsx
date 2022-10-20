import React from 'react'

function ToDoForm({ toAddToDos, setIsOpenModal }) {
    const [newToDo, setNewToDo] = React.useState('')
    return (
        <form onSubmit={event => {
            event.preventDefault();
            toAddToDos(newToDo);
            setIsOpenModal(false);
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newToDo}
                onChange={(event) => {
                    setNewToDo(event.target.value);
                }}
            ></textarea>
            <div className="buttons__container">
                <button
                    type='button'
                    className='cancel-button'
                    onClick={() => setIsOpenModal(false)}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='add-button'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { ToDoForm };