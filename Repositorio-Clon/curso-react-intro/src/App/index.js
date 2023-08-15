import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  const [toDos, saveToDos] = useLocalStorage('ToDoMachine_V1', []); // Guarda la lista "defaultToDos"
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
    saveToDos(newToDos)
  }; // Funcion actualizadora del estado

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos)
  };

  return (

    <AppUI
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />

  );
}

export default App;
