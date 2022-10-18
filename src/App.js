import React from 'react';
import { TodoCounter } from './components/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { ToDoButton } from './components/ToDoButton';
import './App.css';

const todos = [{
  text: 'Cursar Introducción a React', isCompleted: false
}, {
  text: 'Terminar el curso de React', isCompleted: false
}];
function App() {
  return (
    <main>
      <TodoCounter />
      <ToDoSearch />
      <ToDoList>
        {todos.map(e => (
          < ToDoItem key={e.text} text={e.text} />
        ))}
      </ToDoList>
      <ToDoButton />
    </main>
  );
}

export default App;
