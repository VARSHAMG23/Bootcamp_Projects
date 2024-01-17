import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth:AuthServiceService, private router:Router) { }
  canActivate(): boolean {
    if(this.auth.isLoggedIn()) {
      return true;
      
    }
    else{
      alert("no acess")
      this.router.navigateByUrl('/form')
      return false;
    }

  }






}




