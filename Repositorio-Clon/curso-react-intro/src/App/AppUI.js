import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { ToDosEmpty } from '../ToDosEmpty';
import { ToDoContext } from '../ToDoContext';

function AppUI() {
    return (
        <>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedToDos,
                    completeToDo,
                    deleteToDo,
                }) => (
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
                )}
            </ToDoContext.Consumer>

            <CreateToDoButton />
        </>
    )
}

export { AppUI }