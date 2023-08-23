import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { ToDosEmpty } from '../ToDosEmpty';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';
import { ToDoContext } from '../ToDoContext';

function AppUI() {

    const {
        loading,
        error,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext)

    return (
        <>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoList>
                {loading && <ToDosLoading />}
                {error && <ToDosError />}
                {(!loading && searchedToDos.length === 0) && <ToDosEmpty />}

                {searchedToDos.map(toDo => (
                    <ToDoItem
                        key={toDo.text}
                        text={toDo.text}
                        completed={toDo.completed}
                        onComplete={() => completeToDo(toDo.text)}
                        onDelete={() => deleteToDo(toDo.text)}
                    />
                ))}
            </ToDoList>

            <CreateToDoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>)}
        </>
    )
}

export { AppUI }