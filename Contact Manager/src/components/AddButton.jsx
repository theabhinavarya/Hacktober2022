import React from "react";

const AddButton = ({clickHandler}) => {
  return (
    <React.Fragment>
      <button onClick={clickHandler} className="bg-[#00aeff] w-32 font-semibold text-lg rounded-md  py-1  ">
        Add Contact
      </button>
    </React.Fragment>
  );
};

export default AddButton;
