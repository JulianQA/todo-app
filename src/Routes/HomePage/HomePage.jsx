import React from 'react';
import { TodoCounter } from '../../components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../../components/ToDoSearch/ToDoSearch';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import { ToDoItem } from '../../components/ToDoItem/ToDoItem';
// import { Modal } from '../../components/Modal';
import { ToDoButton } from '../../components/ToDoButton/ToDoButton';
import { useMain } from '../../helpers/useMain';


function HomePage() {
   const {
      setSearch,
      toCompleteToDos,
      toDeleteToDo,
      // toAddToDos,
      totalToDos,
      completedToDos,
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
                  id={todo.id}
                  key={todo.id}
                  text={todo.text}
                  toDos={filterByToDos}
                  isCompleted={todo.isCompleted}
                  toCompleteToDos={() => toCompleteToDos(todo.id)}
                  toDeleteToDo={() => toDeleteToDo(todo.id)}
               />
            )}
         </ToDoList>
         <ToDoButton />
      </main>
   );
}

export { HomePage };
