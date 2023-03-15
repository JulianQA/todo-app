import React from "react";
import { ToDoForm } from "../../components/ToDoForm/ToDoForm";
import { useMain } from "../../helpers/useMain";

function NewToDoPage() {
  const { toAddToDos } = useMain();

  return (
    <ToDoForm
      textButton={"Añadir"}
      textForm={"¡Escribe tu nuevo TODO!"}
      submitEvent={(newToDo) => toAddToDos(newToDo)}
    />
  );
}

export { NewToDoPage };
