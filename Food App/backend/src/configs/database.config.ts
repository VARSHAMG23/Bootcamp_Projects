//  line imports the 'connect' function and 'ConnectOptions' interface from the 'mongoose' library.
// These will be used to establish a connection to the MongoDB database.

import {connect,ConnectOptions} from 'mongoose';

// line defines and exports a function named 'dbConnect'.
// This function is responsible for establishing a connection to the MongoDB database.

export const dbConnect =()=>{
// line calls the 'connect' function from 'mongoose' with two arguments:
// 1. The MongoDB URI, retrieved from the environment variables (process.env.MONGO_URI).
// 2. An empty object as the options parameter, casted to 'ConnectOptions' interface.

    connect(process.env.MONGO_URI!,{
        
    } as ConnectOptions).then(()=>console.log("connect successfully"),
    (error)=> console.log(error)
    
    )
}