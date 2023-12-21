import React from 'react'

function Printeven(props) {
    const number = props.number;
   
       

    return (
        <div>
        {number >= 0 ? (
          <p>{number} is a positive number.</p>
        ) : (
          <p>{number} is a negative number.</p>
        )}
      </div>
    );
  }

export default Printeven;
