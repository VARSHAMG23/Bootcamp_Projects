import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder='username' />
        <button>Login</button>
      </div>

      {/* Assuming you want to include the register function here */}
      {register({ primary: true })}
    </div>
  );
};

// Assuming you want to define the register function outside the component
function register(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <div className="login-container">
        <h2 className={`${className} h1`}>Login</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <button style={{color:"yellow"}}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
