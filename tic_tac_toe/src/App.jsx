import React from "react";
import Boards from './components/Boards'
import './styles/root.scss';


const App = () =>{
  return(
  <div className="app">
    <h1> TIC TAC TOE</h1>
    <Boards/>
  </div>
  ) 
}

export default App;
