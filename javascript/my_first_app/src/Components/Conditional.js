import React from 'react';

function Conditional(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {
        isLoggedIn ? <h1>Welcome back, {props.name}</h1> : <h1>Please login to continue</h1>
        
      }
    </div>
  );
}

export default Conditional;


/* I want to login to a page if name=="admin" ? "welcome admin":"welcome customer" 
   I the given number is even then print the number else print negative with statement given number is neagtive*/
