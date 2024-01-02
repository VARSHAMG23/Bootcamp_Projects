import React from 'react';
import loginstyle from './Login.module.css';

function Login() {
  return (
    <div className={loginstyle['login-page']}>
    <div className={loginstyle['login-box']}>
      <h2>Login</h2>
      <form method="post" action="">
        <div className={loginstyle['user-box']}>
          <input type="text" name="uname" placeholder="Username" id={loginstyle.uname} required />
          <label>Username</label>
        </div>
        <div className={loginstyle['user-box']}>
          <input type="password" name="pswd" placeholder="Password" id={loginstyle.pswd} required />
          <label>Password</label>
        </div>
        <a href=' #'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button type="submit" name="login">Submit</button>
        </a>
      </form>
    </div>
    </div>
  );
}

export default Login;
