import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [
  {text: "Cocinar", completed: false},
  {text: "Lavar", completed: false},
  {text: "Limpiar", completed: true},
  {text: "Comer", completed: true},
  {text: "Cantar", completed: false},
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter completed={5} total={8} />

      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
