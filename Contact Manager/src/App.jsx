import React,{useState, useReducer, useLayoutEffect} from "react"
import AddButton from "./components/AddButton"
import MainView from "./components/MainView"
function App() {

  const [contactData, setContactData] = useState(JSON.parse(localStorage.getItem("contactData")) ||[]);
  function submit(object) {
    setContactData((prev) => {
      return [...prev, object];
    });
  }

  console.log(contactData);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
const [init, setInit] = useState(true)
function initPage(){
  contactData.length>0&&setInit(false)
}
useLayoutEffect(() => {
  
  initPage()
}, [contactData])

function editDataA(object){
  let id = object.id;
  let index = contactData.findIndex((obj) => obj.id == id);
  contactData[index] = object;
  forceUpdate();
  
}

function deleteData(id){
  let index = contactData.findIndex((obj) => obj.id == id);
  console.log(index);
  contactData.splice(index, 1);
  forceUpdate(); //saviour T-T
  contactData.length === 0 ? setInit(true) : setContactData(contactData);
  
}

function initButtonHandler(){
  setInit(prev=>!prev)
}

const initView = (<div className="flex flex-col justify-center items-center h-full w-full">
<h1 className="text-white mb-8 text-2xl font-semibold font-poppins">No Contacts Found</h1>
<AddButton clickHandler={initButtonHandler}/>
</div>
)
localStorage.setItem("contactData", JSON.stringify(contactData))

  return (
    <div className="bg-[url('./assets/pexels-andrew-neel-3178786.jpg')]  bg-cover h-[100vh] w-full ">
      <div className="backdrop-blur-sm bg-[#0000003a] h-full w-full">
      {init?(initView):(<MainView deleteData={deleteData}  init={init} onSubmit={submit} contactData={contactData} editData={editDataA}/>)}
      </div>
    </div>
  )
}

export default App
