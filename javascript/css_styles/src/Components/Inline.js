import React from 'react'
import Internal from './Internal'

export default function Inline() {
    const heading={
        color :"orange",
    }
    
  
  return (
    <div>  
    
    <div className="login-container">
      <h2 style={heading}>Login</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder='username' />
      <button style={{backgroundColor:"greenyellow"}}>Login</button>
    </div>
    <br />
    <br />
    <Internal/>
    
  </div>
   
  )
}



