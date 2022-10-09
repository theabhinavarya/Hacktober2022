import React from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import './Care.css'

function Care() {
  return (
    <div className='care-ele'>
      <div className='care-img'></div>
      <div>
      <div className='care-ele1'>
      <RadioButtonCheckedIcon className='circle'/>
      <h2>Brush your teeth twice a day</h2>
      </div>
      <h1 className='ver-bor'></h1>

      <div className='care-ele1'>
      <RadioButtonCheckedIcon className='circle'/>
      <h2>Daily use Mouth wash</h2>
      </div>
      <h1 className='ver-bor'></h1>

      <div className='care-ele1'>
      <RadioButtonCheckedIcon className='circle'/>
      <h2>Eat healthy</h2>
      </div>
      </div>
      
      
    </div>
  )
}

export default Care
