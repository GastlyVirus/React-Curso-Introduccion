import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [
  { text: "Despertarse", completed: true },
  { text: "Bañarse", completed: false },
  { text: "Desayunar", completed: false },
  { text: "Trabajar", completed: true },
  { text: "Gimnasio", completed: false },
  { text: "Jugar", completed: true },
  { text: "Estudiar", completed: false },
  { text: "Manejar", completed: true },
  { text: "Merendar", completed: true },
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos); // Guarda la lista de los To Dos
  const [searchValue, setSearchValue] = React.useState(""); // Guarda el valor del input para buscar
  const completedToDos = toDos.filter(todo => todo.completed).length; // Devuelve la cantidad de To Dos completados
  const totalToDos = toDos.length; // Devuelve la cantidad total de To Dos
  const searchedToDos = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText)
  }); // Devuelve el renderizado de lo que se esta buscando
  const completeToDo = () => {
    const newToDos = [...toDos]; // Hago una copia de la lista de To Dos
    setToDos(newToDos)
  };

  return (
    <>
      <ToDoCounter completed={completedToDos} total={totalToDos} />

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {searchedToDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeToDo}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
