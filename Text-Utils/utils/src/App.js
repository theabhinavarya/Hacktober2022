
import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [Mode,setMode] = useState("light"); //whether dark mode is enaled or not
  // Alert is prop and alert is state variable
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
    

    
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
  }
  

  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    if(Mode === "light"){
      setMode("dark"); 
      document.body.style.backgroundColor = "#273568";
      showAlert("Dark mode has been enabled","success");
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success"); 
    }
  };

  return (
    <>
    
    <Navbar title="Text-Utility" mode ={Mode} toggleMode = {toggleMode}/>
    <Alerts Alert ={alert}/> 
    <div className='container my-3'>
      <TextForm showAlert ={showAlert}
       heading = "Enter your text here" mode={Mode}/>
    </div>
    </>
  );
}

export default App;
