import React from "react";
import "./toDoList.css";

function ToDoList(props) {
  return (
    <section className="ToDoList">
      {!props.totalToDos && (
        <p className="ToDoList__empty">Crea tu primer ToDO!</p>
      )}
      {props.totalToDos && !props.filterByToDos.length && (
        <p className="ToDoList__error-search">
          No hay ToDos que contengan {props.search}
        </p>
      )}
      <ul className="ToDoList__container">
        {props.filterByToDos.map((e) => props.children(e))}
      </ul>
    </section>
  );
}

export { ToDoList };
