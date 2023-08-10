import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          No quiero <code>src/App.js</code> y no piensi guardar para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
return ( 
<li>
  <button>v</button>
  <p>Caminar</p>
  <button>x</button>
</li>
)
}

export default App;
