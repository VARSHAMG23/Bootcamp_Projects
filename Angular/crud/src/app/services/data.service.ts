import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //myUrl="http://localhost:3000/users"
  userEmail:any;
  constructor(private http:HttpClient) { }


//To Get Data
getData(url:any){
 return  this.http.get(url)
}

//To Post Data
postData(url:any,data:any){
  return this.http.post(url,data)
}
getDetails(email:any){
 this.userEmail=email;
 console.log(this.userEmail)
  // return  this.http.get(email)
 }

 receiveDetails(){
  return this.userEmail;
 }

}
