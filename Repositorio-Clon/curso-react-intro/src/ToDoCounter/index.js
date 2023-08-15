import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
    return (
        <h1 className="ToDoCounter">
            Haz Completado <span>{completed}</span> de <span>{total}</span> To Do
        </h1>
    )
}

export { ToDoCounter };
