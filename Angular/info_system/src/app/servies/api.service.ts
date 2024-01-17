import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = 'http://localhost:3000';
  constructor(private _http:HttpClient) { }

//Posting

postData(data:any){
  return this._http.post<any>("http://localhost:3000/posts",data)
  .pipe(map((res:any)=>{
   return res;
  }))
}


//Get data

getData(){
  return this._http.get<any>("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
    return res;
}))
}

//Update 
updateData(data:any,id:number){
 return this._http.put<any>("http://localhost:3000/posts/"+id,data)
 .pipe(map((res:any)=>{
  return res;
}))

}


//delete

deleteData(id:number){
 return this._http.delete<any>("http://localhost:3000/posts/ "+id)
.pipe(map((res:any)=>{
  return res;
}))

}
}
