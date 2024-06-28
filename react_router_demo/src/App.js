import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
function App() {
  const navigate = useNavigate();
  // const NavigateToAbout = () =>{
  //   navigate('/about');
  // }



  const NavigateToWhere = () => {
    let name = 'Kumar'
    if (name == 'Adil') {
      navigate('/about')
    } else {
      navigate('/contact')
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      {/* <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => NavigateToAbout()}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => NavigateTo('/about')}>About</button>
      <button onClick={() => NavigateTo('/contact')}>Contact</button> */}
      <button onClick={() => NavigateToWhere()}>Click Me</button>
      <button onClick={() => navigate(-1)}>Go Back</button>

    </>
  );
}

export default App;
