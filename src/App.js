
import './App.css';

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
        <input type='button' onClick={document.getElementById('year').value==2000}></input>
        
      </section>
    </div>
  );
}

export default App;
