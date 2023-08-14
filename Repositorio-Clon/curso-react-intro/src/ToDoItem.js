import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './ToDoItem.css';

function ToDoItem(props) {
  return (
    <li className="ToDoItem">

      <CompleteIcon
      completed={props.completed} 
      />

      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon />

    </li>
  )
}

export { ToDoItem };
