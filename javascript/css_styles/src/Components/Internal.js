import React from 'react'
import './Internal.css'
function Internal(prop) {
    let className = prop.primary ? 'primary':" ";
  return (
    
    <div>
       <div className="login-container">
       <h2 className={`$ h2 primary`}>Welcome</h2>
      <h2 className={className}>Login</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <button >Login</button>
    </div>
    </div>
  )
}

export default Internal
