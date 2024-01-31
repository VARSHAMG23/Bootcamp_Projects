import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userEmail:any;
  userId:any;
  display:any=false;
  constructor(private http:HttpClient) { }

  getData(url:any):Observable<any>{
    
    return this.http.get<any>(url);
  }

  //Method to post data to a specified URL using the POST method.

  postData(url:any,data:any){
    return  this.http.post(url,data);
  }

 //Retrieve Recieved data
  receivedDetails():any{
    console.log('sent');
    return [this.userEmail,this.userId]
    
  }

  getDetails(email:any,id:any):any{
  this.userEmail = email;
  this.userId = id;
  }

  delete(url:any){
  return this.http.delete(url);
  }

  putData(url:any,data:any){

    return this.http.post(url,data);
   }

  buttonStatus(){
    return this.display
  }
}
