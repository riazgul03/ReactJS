import logo from './logo.svg';
import './App.css';
let a = 10;
let msg = "";
if(a >5){
  msg = "Hello"
}  else{
  msg = "Bay"
}
function App() {
  return (
    <div className="App">
    <h1>{msg}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Learning Never Ends
        </a>
      </header>
    </div>
  );
}

export default App;
