import React from 'react';

function TodoCounter({ total, completed }) {
    return (
        <h2 className='todo__counter-title'>Has completado {completed} de {total} ToDos</h2>
    );
};

export { TodoCounter };