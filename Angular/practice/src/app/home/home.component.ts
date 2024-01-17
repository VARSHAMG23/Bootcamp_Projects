import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router,private auth:AuthService,private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe((response)=>{
      console.log("response",response)
    })
  }
  home(){
    this.router.navigateByUrl('/user');
  }

}
