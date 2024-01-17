import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  apiUrl:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient ) { }

  getData():Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl)
}
//Posting data
postData(data:[]): Observable<any> {
  // const data = {
  //   userId: 11,
  //   id: 101,
  //   title: "Dlithe",
  //   body: "Bootcamp"
  // };

  return this.http.post<any>(this.apiUrl, data);
}


}