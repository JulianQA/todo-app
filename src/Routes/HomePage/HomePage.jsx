import React from "react";
import { ToDoCounter } from "../../components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../../components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import { ToDoItem } from "../../components/ToDoItem/ToDoItem";
import { useMain } from "../../helpers/useMain";
import "./homePage.css";

function HomePage() {
  const {
    setSearch,
    toCompleteToDos,
    toDeleteToDo,
    totalToDos,
    completedToDos,
    search,
    filterByToDos,
  } = useMain();
  return (
    <main className="HomePage">
      <ToDoCounter total={totalToDos} completed={completedToDos} />
      <ToDoSearch search={search} setSearch={setSearch} />
      <ToDoList
        totalToDos={totalToDos}
        search={search}
        filterByToDos={filterByToDos}
      >
        {(todo) => (
          <ToDoItem
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
    </main>
  );
}

export { HomePage };
