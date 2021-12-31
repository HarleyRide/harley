
import './App.css';

let a = input.value;
console.log(a);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <input id='year' type='number'/>
        <div><input type='button' onClick={document.getElementById('year').value===2000}></input></div>
        
        
      </section>
    </div>
  );
}

export default App;
