import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import About from '../About/About'
import Care from '../Care/Care'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      
        <div>
          
       
            <h3 className='img'> <Navbar/>
            <div className='data-ele'>
            <h1 className='line-ele'>We are Commited to your health</h1>
            <p className='para-ele'>We are here to offer you any kind of dental problem we will give our best to cure it</p>
            
            <Link to ="/registration"><button className='btn'>Registration</button></Link>
            </div>
            </h3>
        </div>
        <About/>
        <Care/>
        <Footer/>
        

        

      
    </div>
  )
}

export default Home
