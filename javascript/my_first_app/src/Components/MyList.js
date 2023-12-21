import React from 'react'
// Create an array
function MyList() {

    const items=["a","b","c","d"]
    const item=["Ananya","Bharath","Chirag"]
   
  return (
    <div>
       {/* 2. list */}
       <ul>
        {/*3. Map elements with key and value pair- jsx display */}
        {
        items.map((items ,index)=>(
        <li key={index}> Welcome {items} ,Index position:{index}</li> //key value taken automaticaly by compiler
        ))}
        
       </ul>
       <br/>
       <br/>
       <ol>
  
        {
        item.map((item ,index)=>(
        <li key={index}>Good Afternoon{item} ,Index position:{index}</li>
        ))}
        
       </ol>
    </div>
  );
}

export default MyList
