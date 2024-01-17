import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dhasboard',
  templateUrl: './dhasboard.component.html',
  styleUrls: ['./dhasboard.component.css']
})
export class DhasboardComponent implements OnInit {
//  @Input() Title: string |undefined

 //Interpolation
 public title: string="DashBoard"
  constructor(private router:Router) { }


  //Routing
  userlogin(){
    this.router.navigateByUrl('/User_login')
  }

  adminlogin(){
    this.router.navigateByUrl('/User_login')
  }


  ngOnInit(): void {
  }

}
