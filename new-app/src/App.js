import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
function App(props) {
  return (
    <>
     <h1>Hey{props.name}</h1>
     <h1>Hey {props.age}</h1>
     <h1>Hey {props.isMarried.toString()}</h1>
     <h1> {props.arr}</h1>
     <h1> {props.arr[0]}</h1>

    </>
  );

}
App.propType = {
  name:PropTypes.string,
  age:PropTypes.number,
  isMarried:PropTypes.bool,
  arr:PropTypes.array
}

export default App;
