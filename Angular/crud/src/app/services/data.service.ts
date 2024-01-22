import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Declares variables to store user email and user id.
  userEmail:any;
  userId:any;
  display:any=false;
  isLogged=false;

  

  constructor(private http:HttpClient) { }  

  //Method to fetch data from a specified URL using the GET method. Returns an Observable.

  getData(url:any):Observable<any>{
    
    return this.http.get<any>(url);
  }

  //Method to post data to a specified URL using the POST method.

  postData(url:any,data:any){
    return  this.http.post(url,data);
  }

  // Method to store user details 

  getDetails(email:string,id:string){

    this.userEmail=email;
    console.log('got email');
    this.userId=id
    
  }

  //Method to retrieve stored user details.

  receivedDetails():any{
    console.log('sent');
    return [this.userEmail,this.userId]
    
  }
  //Method to update data using the PUT method.

  putData(url:any,data:any){

   return this.http.post(url,data);
  }

  //Method to delete content from a specified URL using the DELETE method

  deleteContent(url:any){
  
    return this.http.delete(url);

  }
  buttonControl(){
    this.display=true;
  }
  buttonStatus(){
    return this.display
  }

  loggedIn(){
    this.isLogged= true;
  }

  isLoggedIn(): boolean{
   
    return this.isLogged
  }

}