import React from 'react'

function Welcomeadmin(props) {
    const { name } = props;
  return (
    <div>
      
      {
        name === 'admin' ? <h1>Welcome admin!</h1> : <h1>Welcome user!</h1>
      }
    
    </div>
  )
}

export default Welcomeadmin
