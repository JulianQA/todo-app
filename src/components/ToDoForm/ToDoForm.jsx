import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToDoForm.css'

function ToDoForm({ submitEvent, textForm, textButton, textToEdit }) {
    const [newToDo, setNewToDo] = useState(textToEdit || '');
    const navigate = useNavigate();
    return (
        <form
            className='new-todo__form'
            onSubmit={event => {
                event.preventDefault();
                submitEvent(newToDo);
                navigate('/');
            }}>
            <label className='new-todo__label'>{textForm}</label>
            <textarea
                className='new-todo__texte-area'
                value={newToDo}
                onChange={(event) => {
                    setNewToDo(event.target.value);
                }}
            ></textarea>
            <div className="buttons__container">
                <button
                    type='button'
                    className='cancel-button'
                    onClick={() => navigate('/')}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='add-button'
                >
                    {textButton}
                </button>
            </div>
        </form>
    )
}

export { ToDoForm };