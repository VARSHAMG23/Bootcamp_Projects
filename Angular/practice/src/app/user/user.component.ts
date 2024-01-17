import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }
  user()
  {  this.router.navigateByUrl('/login')}

  otheruser(){
    this.router.navigateByUrl('/home')
  }


  ngOnInit(): void {
  }

}
