import React from 'react';
import { TodoCounter } from '../../components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../../components/ToDoSearch/ToDoSearch';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import { ToDoItem } from '../../components/ToDoItem/ToDoItem';
import { Modal } from '../../components/Modal';
import { ToDoForm } from '../../components/ToDoForm/ToDoForm';
import { ToDoButton } from '../../components/ToDoButton/ToDoButton';


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

function HomePage() {
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
   function toCompleteToDos(text) {
      const index = toDos.findIndex(item => item.text === text);
      const newArray = [...toDos];
      newArray[index].isCompleted = true;
      setToDos(newArray);
   }
   function toDeleteToDo(text) {
      const index = toDos.findIndex(item => item.text === text);
      const newArray = [...toDos];
      newArray.splice(index, 1);
      setToDos(newArray);
   }
   function toAddToDos(text) {
      const newArray = [...toDos];
      newArray.push({
         text,
         isCompleted: false
      })
      setToDos(newArray);
   }
   return (
      <main>
         <TodoCounter total={totalToDos} completed={completedToDos} />
         <ToDoSearch search={search} setSearch={setSearch} />
         <ToDoList
            totalToDos={totalToDos}
            search={search}
            filterByToDos={filterByToDos}
            onEmptyToDos={() => <p>Crea tu primer ToDo</p>}
            onEmptySearch={(text) => <p>no hay ToDos que contenga {text}</p>}
         // render={todo => (
         //   < ToDoItem
         //     key={todo.text}
         //     text={todo.text}
         //     isCompleted={todo.isCompleted}
         //     toCompleteToDos={() => toCompleteToDos(todo.text)}
         //     toDeleteToDo={() => toDeleteToDo(todo.text)}
         //   />
         // )}
         >
            {todo => (
               < ToDoItem
                  key={todo.text}
                  text={todo.text}
                  isCompleted={todo.isCompleted}
                  toCompleteToDos={() => toCompleteToDos(todo.text)}
                  toDeleteToDo={() => toDeleteToDo(todo.text)}
               />
            )}
         </ToDoList>
         {!!isOpenModal && (
            <Modal>
               <ToDoForm
                  toAddToDos={toAddToDos}
                  setIsOpenModal={setIsOpenModal} />
            </Modal>)
         }
         <ToDoButton
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal} />
      </main>
   );
}

export { HomePage };
