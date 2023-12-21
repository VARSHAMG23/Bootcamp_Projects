import React,{useState} from 'react'
// Use State
function CountWithFunction() {

   const[count,setCount]=useState(0) //intialise value
   const incrementCount=()=>{
     setCount(count+1);

   };
   const decrementCount=()=>{
    setCount(decrementCount=>decrementCount-1);

  };
  const squareCount=()=>{
    setCount(count * count);

  };
  return (
    <div>
      <p>Count Value:{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <br/>
      <br/>
      <button onClick={decrementCount}>Decrement</button>
      <br/>
      <br/>
      <button onClick={squareCount}>Square</button>
    </div>
  )
}

export default CountWithFunction
