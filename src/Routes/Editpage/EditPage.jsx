import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ToDoForm } from '../../components/ToDoForm/ToDoForm';
import { useMain } from '../../helpers/useMain';
function EditPage() {
   const { toEditToDos, getTodo } = useMain();
   const toDo = getTodo(Number(slug));
   return (
      <ToDoForm
         textButton={'Editar'}
         textForm={'¡Edita tu TODO!'}
         textToEdit={toDo}
         submitEvent={(newText) => toEditToDos(Number(slug), newText)}
      />
   )
}

export { EditPage }