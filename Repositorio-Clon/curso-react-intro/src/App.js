import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [
  { text: "Despertarse", completed: true },
  { text: "Bañarse", completed: false },
  { text: "Desayunar", completed: true },
  { text: "Trabajar", completed: true },
  { text: "Gimnasio", completed: false },
  { text: "Jugar", completed: true },
  { text: "Estudiar", completed: false },
]

function App() {
  return (
    <>
      <ToDoCounter completed={11} total={13} />

      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
