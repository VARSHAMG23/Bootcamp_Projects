import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  userData:any;
  myUrl="http://localhost:3000/users"
  
  //Initialize FormGroup , Form is of type FormGroup
  myForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private dataService:DataService,private http:HttpClient ) {
    
    this.myForm=this.fb.group({

      //Specifiying Feilds and Froming Groups

      email:['',Validators.email],
      password:['',Validators.required]

    })

   }
  ngOnInit(): void {

    this.dataService.getData(this.myUrl).subscribe(response => {
      this.userData=response;
      console.log(this.userData);
  })
  }
  onSubmit(): any {
    let user=false;
    console.log(this.myForm.value)

    // this.router.navigateByUrl('/**')
    for(let data of this.userData){
      if(data.email===this.myForm.value['email']){
        user=true;
        if(data.password==this.myForm.value['password']){
          console.log("Success");
          alert("Login Success");
          this.dataService.getDetails(this.myForm.value['email'])
          this.router.navigateByUrl('/userpage')
      }
      else{
        alert("Wrong password,Try again");
      }

    }
 }

if(!user){
  alert("User not found");
  this.router.navigateByUrl('/signup')
}
  }
}