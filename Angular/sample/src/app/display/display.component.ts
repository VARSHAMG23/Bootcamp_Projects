import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router:Router,private auth:AuthServiceService,private dataService:DataService,private http:HttpClient) { }
  
  
  
  back() {

    this.router.navigateByUrl('/form');
  }
  ngOnInit(): void {
    // if(!this.auth.isLoggedIn()) {
    //   alert('No Access')
    //   this.router.navigateByUrl('/form');
    this.dataService.getData().subscribe((response)=>{
      console.log("response",response)
    })
  
  }
 

}
