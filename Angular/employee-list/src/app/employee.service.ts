import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs'; // Updated import for throwError
import { catchError } from 'rxjs/operators'; // Updated import for catchError

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private _url: string = "/assets/data/employees1.json";
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(error.message || "Server Error");
  }
}
