import './App.css';
import Home from './Componenet/Home/Home';
import { Routes, Route } from "react-router-dom"
import Registration from './Componenet/Registration/Registration'
import Signup from './Componenet/SignUp/Signup';
import Signin from './Componenet/Signin/Signin';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/" element={ <Home/> }/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>

          </Routes>
    </div>
  );
}

export default App;
