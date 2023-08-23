import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoSearch.css';

function ToDoSearch() {

    const { searchValue, setSearchValue } = React.useContext(ToDoContext)

    return (
        <input
            placeholder="Escribe tu tarea"
            className="ToDoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    )
}

export { ToDoSearch };