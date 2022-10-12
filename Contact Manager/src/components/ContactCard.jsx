import React,{useState} from "react";
import personIcon from "../assets/211731_contact_icon.png";
import Popup from "./Popup";

const ContactCard = (props) => {

  const [popup, setPopup] = useState(false)
  const [editBut, setEditBut] = useState(false)

  function editButtonHandler(){
    setEditBut(prev=>!prev)
    setPopup(prev=>!prev)
  }

  return (
    <div className="h-24 w-full flex text-white border-b-[1.8px] border-[#ffffff7a] bg-[#000000d2] ">
      <div className="flex justify-center items-center pl-2 py-2 w-20  h-full ">
        <div className="flex justify-center items-center bg-white rounded-md  w-20 h-full">
          <img className="w-20" src={personIcon} />
        </div>
      </div>
      <div className=" w-full flex justify-evenly  items-center">
        <div className="w-full flex justify-evenly  items-center">
        <div className="flex  w-[50%] md:ml-32 ml-12">
        <h1 className="mr-2 lg:text-xl">Name :</h1>
        <h1 className="font-poppins lg:text-xl font-semibold">{props.name}</h1>
        </div>
        <div className="flex  w-[50%]">
        <h1 className="mr-2 lg:text-xl">Phone No. :</h1>
        <h1 className="font-poppins lg:text-xl font-semibold">{props.number}</h1>
        </div>
        </div>
        <button onClick={editButtonHandler} className="bg-white text-black w-16 h-9 mr-4 font-poppins font-semibold rounded-md text-[1.1rem] border-[1.5px] border-black ">Edit</button>
      </div>
      {popup&&<Popup deleteD={props.delete} clickHandler={editButtonHandler} dataAdd={props} editBut={editBut} editData={props.editData}/>}
    </div>
  );
};

export default ContactCard;
