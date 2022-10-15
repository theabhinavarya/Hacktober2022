import React from 'react'

const CoinContainer = () => {
  return (
    <button className='hover:bg-[#0f1114] hover:cursor-pointer w-full h-[5.9rem] rounded-t flex  border-b border-[#a9a9a99f] '>
      <div className=' sm:w-[40%] w-[20%] h-full flex flex-col  justify-center items-start  px-5 '>
        <h1 className=' sm:text-2xl text-[0.8rem]'>BTC</h1>
        <h1 className='text-[#A9A9A9] sm:text-md  text-[0.8rem]'>Bitcoin</h1>
      </div>
      <div className=' sm:w-[20%] w-[35%] h-full flex items-center just px-5 justify-center'>
      <h1 className='sm:text-[0.95rem] text-[0.7rem]  '>$ 19,000.43</h1>
      </div>
      <div className='w-[20%] h-full flex items-center just px-5 justify-center'>
      <h1 className='sm:text-[0.95rem] text-[0.7rem] '>-2.03%</h1>
      </div>
      <div className=' sm:w-[20%] w-[35%] h-full flex items-center just px-5 justify-end'>
      <h1 className='sm:text-[0.95rem] text-[0.7rem] '>$ 403,000M</h1>
      </div>
    </button>
  )
}

export default CoinContainer