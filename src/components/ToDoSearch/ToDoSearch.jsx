import React from "react";
import "./toDoSearch.css";

function ToDoSearch({ search, setSearch }) {
  return (
    <input
      className="ToDoSearch"
      placeholder="Search task..."
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };
