import React from "react";
import { ToDoContext } from '../ToDoContext'
import './ToDoForm.css';

function ToDoForm() {
    const { setOpenModal, addNewToDoValue } = React.useContext(ToDoContext);
    const [newToDoValue, setNewToDoValue] = React.useState('');


    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addNewToDoValue(newToDoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>

            <label>Escribe tu nueva tarea</label>

            <textarea
                placeholder="Escriba aquí..."
                value={newToDoValue}
                onChange={onChange}
            />

            <div className="ToDoForm-ButtonContainer">
                <button className="ToDoForm-Button--Agregar" type="submit">Agregar</button>

                <button
                    className="ToDoForm-Button--Cancelar"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
            </div>

        </form>
    )
}

export { ToDoForm }