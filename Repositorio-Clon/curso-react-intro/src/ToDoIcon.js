import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './ToDoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
}

function ToDoIcon({ type, color }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { ToDoIcon };