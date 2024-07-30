import logo from './logo.svg';
import './App.css';

import { Link, BrowserRouter, Route, Routes, Router,  } from 'react-router-dom';

import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantCreate from "./components/RestaurantCreate";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/create">Create</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/detail">Detail</Link></li>
      <li><Link to="/update">Update</Link></li>

    </ul>
    <Routes>
      <Route path='/list' element={<RestaurantList/>}></Route>
    </Routes>
    <Routes>
      <Route path='/detail' element={<RestaurantDetail/>}></Route>
    </Routes>
    <Routes>
      <Route path='/search' element={<RestaurantSearch/>}></Route>
    </Routes>
    <Routes>
      <Route path='/update' element={<RestaurantUpdate/>}></Route>
    </Routes>
    <Routes>
      <Route path='/create' element={<RestaurantCreate/>}></Route>
    </Routes>
    <Routes>
      <Route path='/home' exact element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
