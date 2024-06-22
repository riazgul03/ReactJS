import logo from './logo.svg';
import './App.css';
import CSSstylesheet from './CSSstylesheet';
import Stylesheet1 from './Stylesheet1';
import Stylesheet2 from './Stylesheet2';
import USComponent from './USComponent';
import USWithObject from './USWithObject';
import USWithArray from './USWithArray';
import ClassState from './ClassState';
import FunctionState from './FunctionState';
import ClassEffect from './ClassEffect';
import FunctionEffect from './FunctionEffect';
import CompA from './CompA';
import { createContext, useState } from 'react';

export const NameContext = createContext()
export const ChannelContext = createContext()

function App() {
  const [name, setName] = useState('Kumar')
  return (
    <div>
      <NameContext.Provider value={name}>
        <ChannelContext.Provider value={"Learning Never Ends"}>
          <CompA />
        </ChannelContext.Provider>
      </NameContext.Provider>
    </div>
  )
}

export default App