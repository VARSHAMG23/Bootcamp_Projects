import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private data:DataService,private router:Router) { }

  canActivate(): boolean {
    if(this.data.isLoggedIn()) {
      return true;
      
    }
    else{
      alert("no acess")
      this.router.navigateByUrl('login')
      return false;
    }
  }
}

