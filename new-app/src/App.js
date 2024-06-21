import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';

 function App() {
  const name = "Prem";
  if (name == "Adil") {
    return <Component1 />
  }
  else {
    return <Component2/>
  }
}

export default App
