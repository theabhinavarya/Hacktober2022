import React from 'react'

const Popup = ({coinData}) => {
  console.log(coinData)
  return (
    <div className="text-black bg-[#000000a9] backdrop-blur-md fixed top-0 left-0 w-full h-[100%] flex justify-center items-center">
      <div className="px-3 flex flex-col  bg-primaryBg w-[85%] h-[95%] rounded-lg"></div>
      </div>  
  )
}

export default Popup