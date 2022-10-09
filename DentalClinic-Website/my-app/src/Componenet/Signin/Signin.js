import React from 'react'

function Signin() {
  return (
    <div className='form-ele1'>

      <form className='form-ele'>
        <h2>Sign-in</h2>
        

        <label>Email</label>
        <input type="email" placeholder='email'/>

        <label>Password</label>
        <input type="password" placeholder='Password'/>

        <button className='sub-ele'>Submit</button>


      </form>
    </div>
  )
}

export default Signin
