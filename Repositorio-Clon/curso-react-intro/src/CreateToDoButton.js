import './CreateToDoButton.css';

function CreateToDoButton(props) {
    return (
        <button className="CreateToDoButton"
        onClick={(event)=> console.log("click", event.target)}>
            +
        </button>
    )
}


export { CreateToDoButton };
