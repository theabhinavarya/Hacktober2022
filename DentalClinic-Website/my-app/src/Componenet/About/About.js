import React from 'react'
import "./About.css"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function About() {
  return (
    <div className='about-ele'>
        <div className='about2'>
          <h1 className='about-h1'>What we can do</h1>
          <div className='things'>
            <div className='things2'>
              <RadioButtonCheckedIcon className='circle'/>
              <h3>RCT</h3>
            </div>
            <div className='things2'>
              <RadioButtonCheckedIcon className='circle'/>
              <h3>Crown</h3>
            </div>
            <div className='things2'>
              <RadioButtonCheckedIcon className='circle'/>
              <h3>Whiteing </h3>
            </div>
            <div className='things2'>
              <RadioButtonCheckedIcon className='circle'/>
              <h3>RCT</h3>
            </div>
          </div>

        </div>
      <div className='img-box'>
        <h1 className='about-img'></h1>
      </div>
      
    </div>
  )
}

export default About
