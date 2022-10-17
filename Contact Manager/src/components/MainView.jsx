import React, { useState , useLayoutEffect} from "react";
import AddButton from "./AddButton";
import ContactCard from "./ContactCard";
import Popup from "./Popup";
const MainView = ({ onSubmit, contactData, init, editData, deleteData }) => {
  const [newContactData, setNewContactData] = useState({
    id: "",
    name: "",
    number: "",
  });
  function handleEditContact(event) {
    setNewContactData((prevData) => {
      return {
        ...prevData,
        id: Math.random().toString(),
        [event.target.name]: event.target.value,
      };
    });
  }

  const [popup, setPopup] = useState(false);

  function popupButtonHandler() {
    setPopup((prev) => !prev);
  }
  function handleAddContactSubmit(event) {
    event.preventDefault();
    setPopup((prev) => !prev);
    onSubmit(newContactData);
    setNewContactData((prevData) => {
      return {
        id: "",
        name: "",
        number: "",
      };
    });
  }
  useLayoutEffect(() => {
    function initPopup(){
  !init&&contactData==0&&setPopup(true)
    }
    initPopup()
  }, [init])
  

  return (
    <div className=" h-full w-full">
      <nav className="flex justify-center py-[1.4rem] ">
        <AddButton clickHandler={popupButtonHandler} />
      </nav>
      <div className="h-[88%] w-full  flex justify-center ">
        <div className="h-[97%] w-[85%] overflow-y-auto ">
          {contactData.map((item) => (
            <ContactCard
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
              editData={editData}
              delete={deleteData} 
            />
          ))}
        </div>
      </div>
      {popup && (
        <Popup
          clickHandler={popupButtonHandler}
          submit={handleAddContactSubmit}
          change={handleEditContact}
          dataAdd={newContactData}
        />
      )}
    </div>
  );
};

export default MainView;
