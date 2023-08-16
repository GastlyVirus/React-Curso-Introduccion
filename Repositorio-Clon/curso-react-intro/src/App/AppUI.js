import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { ToDosEmpty } from '../ToDosEmpty';

function AppUI({
    loading,
    error,
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo }) {
    return (
        <>
            <ToDoCounter completed={completedToDos} total={totalToDos} />

            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

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

            <CreateToDoButton />
        </>
    )
}

export { AppUI }