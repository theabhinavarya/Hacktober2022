import React,{useState} from "react";

const Popup = ({ clickHandler, editBut, dataAdd, change, submit, editData , deleteD}) => {

  const [editContactData, setEditContactData] = useState({
    id: dataAdd.id,
    name: dataAdd.name,
    number: dataAdd.number,

  });

  function handleEditChange(event) {
    setEditContactData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function submitEdit(){
    editData(editContactData)
    clickHandler()
  }
  function deleteData(){
    deleteD(editContactData.id)
    
clickHandler()

  }
  return (
    <div className="text-black bg-[#000000a9] backdrop-blur-md fixed top-0 left-0 w-full h-[99.9%] flex justify-center items-center">
      <div className="px-3 flex flex-col  bg-[#00aeff] w-[35rem] h-[15.2rem] rounded-lg">
      <div className="  w-[100%] flex justify-end ">
      <button
            onClick={clickHandler}
            className="w-9 h-9 font-semibold text-2xl mr-2 mt-[0.2rem]  text-[#fc2121fb] "
          >
            X
          </button>
          </div>
        <div className=" mb-4  text-md">
          <h1 className="font-poppins  font-semibold ">Name</h1>
          <input
            type="text"
            name="name"
            onChange={editBut?handleEditChange:change}
            value={editBut?editContactData.name:dataAdd.name}
            className="mt-2 w-full rounded-sm"
          />
        </div>
        <div className="mt-3 text-md">
          <h1 className="font-poppins  font-semibold ">Phone No.</h1>
          <input
            type="number"
            maxLength={10}
            className="mt-2 w-full rounded-sm"
            name="number"
            onChange={editBut?handleEditChange:change}
            value={editBut?editContactData.number:dataAdd.number}
          />
        </div>
        <div className="mt-5 flex justify-end">
          {editBut?(<div>
            <button
            className="text-white mr-2 w-[4rem] h-[2rem] rounded-md border-[1.5px] border-black bg-[#f73131fb] "
              onClick={deleteData}
            >
              Delete
            </button>
            <button
            onClick={submitEdit}
            className="mr-2 w-[4rem] h-[2rem] rounded-md border-[1.5px] border-black bg-white"
          >
            Apply
          </button>
          </div>
          ):
          (<button
            onClick={clickHandler&&dataAdd.name!=''&&submit}
            className="mr-2 w-[4rem] h-[2rem] rounded-md border-[1.5px] border-black bg-white"
          >
            Add
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default Popup;
