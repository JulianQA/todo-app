import React from "react";
function useLocalStorage(itemName, initialState) {
   const toDosPerUser = localStorage.getItem(itemName);
   let defaultToDos;

   if (!toDosPerUser) {
      defaultToDos = localStorage.setItem(itemName, JSON.stringify(initialState));
      defaultToDos = initialState;
   } else {
      defaultToDos = JSON.parse(localStorage.getItem(itemName));
   }
   const [toDos, setToDos] = React.useState(defaultToDos);

   const saveChangesOnToDos = newToDO => {
      const stringified = JSON.stringify(newToDO);
      localStorage.setItem(itemName, stringified);
      setToDos(newToDO);
   }
   return [
      toDos,
      saveChangesOnToDos
   ]
}
export { useLocalStorage }