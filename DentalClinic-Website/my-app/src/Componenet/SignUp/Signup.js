import React from 'react'

function Signup() {
  return (
    <div className='form-ele1'>
      <form className='form-ele'>
        <label>Name</label>
        <input type="text" placeholder='name'/>

        <label>Email</label>
        <input type="text" placeholder='email'/>

        <label>Password</label>
        <input type="password" placeholder='password'/>

       

        <button className='sub-ele'>Submit</button>


      </form>
    </div>
  )
}

export default Signup
