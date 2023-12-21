import React from 'react';

function Even(props) {
  const num = props.num;

  return (
    <div>
      {
        num % 2 === 0 ? <p>{num} is even.</p> : <p>{num} is not even.</p>
      }
    </div>
  );
}

export default Even;
