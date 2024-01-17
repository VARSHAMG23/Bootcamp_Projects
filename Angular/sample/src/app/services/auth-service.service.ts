import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
isLoggedIn(): boolean{
  return true;
}
  constructor() { }
}
