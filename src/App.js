import React from 'react';
import { TodoCounter } from './components/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { ToDoButton } from './components/ToDoButton';
import './App.css';

const defaultToDos = [
  {
    text: 'Cursar Introducción a React',
    isCompleted: true
  },
  {
    text: 'Terminar el curso de React',
    isCompleted: false
  },
  {
    text: 'Planchar la Ropa',
    isCompleted: false
  }
];


function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [search, setSearch] = React.useState('');

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
  return (
    <main>
      <TodoCounter total={totalToDos} completed={completedToDos} />
      <ToDoSearch search={search} setSearch={setSearch} />
      <ToDoList>
        {filterByToDos.map(e => (
          < ToDoItem
            key={e.text}
            text={e.text}
            isCompleted={e.isCompleted}
            toCompleteToDos={() => toCompleteToDos(e.text)}
            toDeleteToDo={() => toDeleteToDo(e.text)} />
        ))}
      </ToDoList>
      <ToDoButton />
    </main>
  );
}

export default App;
