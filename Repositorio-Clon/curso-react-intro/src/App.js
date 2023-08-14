import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [
  { text: "Despertarse", completed: true },
  { text: "Bañarse", completed: true },
  { text: "Desayunar", completed: false },
  { text: "Trabajar", completed: true },
  { text: "Gimnasio", completed: true },
  { text: "Jugar", completed: false },
  { text: "Estudiar", completed: true },
  { text: "Manejar", completed: true },
  { text: "Merendar", completed: false },
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos); // Guarda la lista "defaultToDos"
  const [searchValue, setSearchValue] = React.useState(""); // Guarda el valor del input "ToDoSearch" para buscar

  const completedToDos = toDos.filter(toDo => toDo.completed).length; // Filtra los objetos del estado "toDos" que cumplan con la propiedad "completed" y devuelve la cantidad en numeros
  const totalToDos = toDos.length; // Devuelve la cantidad total de objetos dentro del estado "toDos"

  const searchedToDos = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText)
  }); // Devuelve el renderizado en "ToDoList" de lo que se esta buscando en el "searchValue"

  const completeToDo = (text) => {
    const newToDos = [...toDos]; // Hago una copia de la lista de To Dos
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text);
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos)
  }; // Funcion actualizadora del estado

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);
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
        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={()=>completeToDo(toDo.text)}
            onDelete={()=>deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
