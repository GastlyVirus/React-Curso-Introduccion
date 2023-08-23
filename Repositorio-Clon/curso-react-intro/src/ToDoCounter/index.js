import React from 'react';
import { ToDoContext } from '../ToDoContext'
import "./ToDoCounter.css";

function ToDoCounter() {
    const { completedToDos,
        totalToDos } = React.useContext(ToDoContext)
    return (
        <h1 className="ToDoCounter">
            Haz Completado <span>{completedToDos}</span> de <span>{totalToDos}</span> To Do
        </h1>
    )
}

export { ToDoCounter };
