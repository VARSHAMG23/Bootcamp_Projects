import React from 'react'
import './StyleComponent.css'
import './StyleLibrary.css'
function StyleComponent(props) {
    // Internal Styling  -calling variable
    const heading={
        color: 'green',
        fontFamily: 'Times New Roman',
    }
    let className = props.primary ? 'primary': '';
  return (
    <div>
      <h1 className={className}>Varsha </h1>
      
      {/* Template literals  */}
      <h1 className={`$ h1 font-xl`}>Varsha </h1>
      <h1 className={`${className} font-xl`}>Varsha </h1>
      <h2 className={`$ secondary `}>Good Girl</h2>
      {/* In this case we are creating an variable with help of js and the name should be written infront of style attribute with {} */}
      <h3 className='secondary' style={heading}>Good Evening</h3>
      <h4 style={{color:"Blue"}}>Hi</h4>
    </div>
  )
}

export default StyleComponent
