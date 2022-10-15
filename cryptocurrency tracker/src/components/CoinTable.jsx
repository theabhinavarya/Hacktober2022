import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { CoinList } from '../api'
import CoinContainer from './CoinContainer'
const CoinTable = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchcoins = async () =>{
    setLoading(true)
    const {data} = await axios.get(CoinList())
    setCoins(data)
    setLoading(false)
  }
  useEffect(() => {
   fetchcoins()
  }, [])
  console.log(coins)
  return (
    <div className='px-16'>
    <div className='mt-4 '>
      <h1 className='text-center text-[2.1rem] font-montserrat'>Cryptocurrency Prices by Market Cap</h1>
    </div>
    <input type="text" className='bg-primaryBg border border-[#777777] w-full mt-4 h-[3.3rem] rounded px-4 placeholder:text-[#b4b4b4] placeholder:italic outline-none focus:border-white' placeholder='Search For a Cryptocurrency'/>
    <div className='w-full h-14 bg-accent mt-6 rounded-t flex text-black font-semibold font-montserrat sm:text-sm text-[0.7rem] '>
      <div className=' sm:w-[40%] w-[25%]  h-full flex items-center  px-5 '>
        <h1>Coin</h1>
      </div>
      <div className=' w-[20%] h-full flex items-center just px-5 justify-center'>
      <h1>Price</h1>
      </div>
      <div className='w-[20%] h-full flex items-center just px-5 justify-center'>
      <h1>24H Change</h1>
      </div>
      <div className=' sm:w-[20%] w-[35%]  h-full flex items-center just px-5 justify-end'>
      <h1>Market Cap</h1>
      </div>
    </div>
      <div className=' h-[35rem] overflow-y-scroll '>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      <CoinContainer/>
      </div>
    </div>
  )
}

export default CoinTable