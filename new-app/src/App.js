import logo from './logo.svg';
import './App.css';

// function App(props) {
//   return (
//     <>
//     <h1>Learning Never Ends</h1>
//     </>
//   );
// }

// const App = () => <h1>Mohammad Adil</h1>
const App = (props) => {
  return(
  <>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
  </>
  );
}

export default App;
