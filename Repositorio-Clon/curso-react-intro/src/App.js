import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

function App() {
  return (
    <React.Fragment>
      <ToDoCounter completed={5} total={8} />

      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
