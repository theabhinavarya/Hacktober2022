import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-ele'>
        <div className='footer'>
            <FacebookIcon className='face'/>
            <h1><TwitterIcon/></h1>
            <h1><InstagramIcon/></h1>
            <h1><LinkedInIcon/></h1>
            

        </div>
        <p></p>
      
    </div>
  )
}

export default Footer
