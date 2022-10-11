import React from 'react'
import "./Navbar.css"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <div className='full-nav'>
        <ul className='logo-ele'>
            <li><LocalHospitalIcon className='logo' style={{ fontSize: 40 }} /></li>
        </ul>
        <ul className='nav-ul'>

          <Link to="/" ><li>Home</li> </Link>
            <Link to ="/registration"><li>Registration</li></Link>
            <li>AboutUs</li>
            <li>Contact-us</li>
            <Link to ="/signin"> <li>Sign-in</li></Link>
           
            <Link to ="/signup"><li>Sign-up</li></Link>
            
        </ul>
        </div>
      
    </div>
  )
}

export default Navbar
