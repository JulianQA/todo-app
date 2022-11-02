import React from 'react';
import { TodoCounter } from '../../components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../../components/ToDoSearch/ToDoSearch';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import { ToDoItem } from '../../components/ToDoItem/ToDoItem';
import { Modal } from '../../components/Modal';
import { ToDoForm } from '../../components/ToDoForm/ToDoForm';
import { ToDoButton } from '../../components/ToDoButton/ToDoButton';
import { useMain } from '../../helpers/useMain';


function HomePage() {
   const {
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
   } = useMain();
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
         >
            {todo => (
               < ToDoItem
                  key={todo.id}
                  text={todo.text}
                  isCompleted={todo.isCompleted}
                  toCompleteToDos={() => toCompleteToDos(todo.id)}
                  toDeleteToDo={() => toDeleteToDo(todo.id)}
                  toEditToDo={() => console.log('Edit')}
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
