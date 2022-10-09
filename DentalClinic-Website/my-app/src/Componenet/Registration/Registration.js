import React from 'react'
import "./Registration.css"

function Registration() {
  return (
    <div className='form-ele1'>

      <form className='form-ele'>
        <h2>Registration for check-up</h2>
        <label>Name</label>
        <input type="text" placeholder='name'/>

        <label>Address</label>
        <input type="text" placeholder='address'/>

        <label>Phone</label>
        <input type="number" placeholder='Phone'/>

        <label>problem</label>
        <input type="textarea" placeholder='Problem'/>

        <button className='sub-ele'>Submit</button>


      </form>
    </div>
  )
}

export default Registration
