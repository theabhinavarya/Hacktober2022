import React from 'react'
import { useContext } from 'react'
import { CoinContext } from '../CoinContext'
const Header = () => {

  const {} = useContext(CoinContext)

  return (
    <nav className='shadow-lg flex items-center   bg-[#0f1114] h-[4.2rem] '>
      <h1 className="tracking-wide text-accent font-montserrat font-extrabold text-[1.3rem] ml-[4.5rem] " >Cryptocurrency Tracker</h1>
    </nav>
  )
}

export default Header