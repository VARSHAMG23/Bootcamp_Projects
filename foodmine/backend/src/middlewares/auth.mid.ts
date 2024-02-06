//  line imports the 'verify' function from the 'jsonwebtoken' library.
// This function is used to verify the authenticity of JSON Web Tokens (JWTs) during authentication.

import { verify } from "jsonwebtoken";

// line imports the 'HTTP_UNAUTHORIZED' constant from the file located at "../constants/http_status".
// This constant holds the HTTP status code 401, which indicates an Unauthorized error.

import { HTTP_UNAUTHORIZED } from "../constants/http_status";

// exports a default function that serves as middleware.
// This middleware is responsible for verifying the JWT token in the request header to authenticate the user.
// It takes three parameters: 'req' for the request object, 'res' for the response object, and 'next' for the next middleware in the pipeline.

export default(req:any, res:any,next:any)=>{
    const token=req.headers.access_token as string;
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();
// block retrieves the JWT token from the 'access_token' header in the request.
// If the token is missing (null or undefined), it sends a 401 Unauthorized response using the HTTP_UNAUTHORIZED status code.

//  block attempts to verify the authenticity of the JWT token using the 'verify' function.
// It decodes the token using the provided JWT_SECRET from environment variables.
// If verification is successful, it attaches the decoded user information to the 'user' property of the request object.

    try{
        const decodedUser=verify(token,process.env.JWT_SECRET!);
        req.user=decodedUser;
    }

// If an error occurs it sends a 401 Unauthorized response.

    catch(error){
        res.status(HTTP_UNAUTHORIZED).send();
    }
// It ensures that the request continues to be processed after JWT verification, if successful.
    return next();
}