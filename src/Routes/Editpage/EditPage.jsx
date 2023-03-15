import React from "react";
import { useParams } from "react-router-dom";
import { ToDoForm } from "../../components/ToDoForm/ToDoForm";
import { useMain } from "../../helpers/useMain";
function EditPage() {
  const { toEditToDos, getTodo } = useMain();
  const { slug } = useParams();
  const toDo = getTodo(Number(slug));

  return (
    <ToDoForm
      textButton={"Editar"}
      textForm={"¡Edita tu TODO!"}
      textToEdit={toDo.text}
      submitEvent={(newText) => toEditToDos(Number(slug), newText)}
    />
  );
}

export { EditPage };
