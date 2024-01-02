import React from 'react';
import registerStyle from './Register.module.css';

function Register() {
  return (
    <div>
      <div className={registerStyle['login-box']}>
        <h2>Registration</h2>
        <form method="post" action="">
          <div className={registerStyle['user-box']}>
            <input type="text" name="uname" placeholder="Username" id={registerStyle.uname} required />
            <label>Username</label>
          </div>
          <div className={registerStyle['user-box']}>
            <input type="email" name="email" placeholder="Email" id={registerStyle.email} required />
            <label>Email</label>
          </div>
          <div className={registerStyle['user-box']}>
            <input type="password" name="pswd" placeholder="Password" id={registerStyle.pswd} required />
            <label>Password</label>
          </div>
          <a href="#">
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

export default Register;
