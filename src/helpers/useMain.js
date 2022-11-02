import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useMain() {
   const [toDos, setToDos] = useLocalStorage('toDosPerUser', []);
   const [search, setSearch] = React.useState('');
   const [isOpenModal, setIsOpenModal] = React.useState(false);

   const totalToDos = toDos.length;
   const completedToDos = toDos.filter(item => item.isCompleted === true).length;

   let filterByToDos = [];

   if (!search.length >= 1) {
      filterByToDos = toDos;
   } else {
      filterByToDos = toDos.filter(item => {
         const itemText = item.text.toLowerCase();
         const searchText = search.toLowerCase();
         return itemText.includes(searchText);
      })
   }

   function toCompleteToDos(id) {
      const index = toDos.findIndex(item => item.id === id);
      const newArray = [...toDos];
      newArray[index].isCompleted = true;
      setToDos(newArray);
   }

   function toDeleteToDo(id) {
      const index = toDos.findIndex(item => item.id === id);
      const newArray = [...toDos];
      newArray.splice(index, 1);
      setToDos(newArray);
   }

   function toAddToDos(text) {
      const id = idGenerator(toDos);
      const newArray = [...toDos];
      newArray.push({
         text,
         isCompleted: false,
         id,
      })
      setToDos(newArray);
   }
   const idGenerator = (toDoList) => {
      const idList = toDoList.map(item => item.id);
      const idMax = !idList ? 1 : Math.max(idList);
      return idMax + 1
   }

   return {
      setSearch,
      isOpenModal,
      setIsOpenModal,
      totalToDos,
      completedToDos,
      toCompleteToDos,
      toDeleteToDo,
      toAddToDos,
      search,
      filterByToDos,
   }
}

export { useMain }
