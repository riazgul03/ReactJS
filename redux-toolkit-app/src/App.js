import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reduxtoolkit/counterSlice';


function App() {
  const myState = useSelector((state) => state.counter.count);
  const dispach = useDispatch();
  return (
    <div className="App">
      <h1>REDUX TOOL KIT EXAMPLE</h1>
      <input type="text" value={myState} />
      <button onCanPlay={() => dispach(increment())}>Plus</button>
      <button onCanPlay={() => dispach(decrement())}>Minus</button>
    </div>
  );
}

export default App;
