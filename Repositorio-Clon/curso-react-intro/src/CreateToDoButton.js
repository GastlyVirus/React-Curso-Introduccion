import './CreateToDoButton.css';

function CreateToDoButton(props) {
    return (
        <button className="CreateToDoButton"
        onClick={()=> console.log("click")}>
            +
        </button>
    )
}

export { CreateToDoButton };