import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
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
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private http:HttpClient ) {
  // Create a FormGroup with email and password fields
    this.myForm=this.fb.group({

      //Specifiying Feilds and Froming Groups

      email:['',Validators.email],
      password:['',Validators.required]

    })

   }
  ngOnInit(): void {
    // Fetch user data from the specified URL when the component initializes
    this.auth.getData(this.myUrl).subscribe(response => {
      this.userData=response;
      console.log(this.userData);
  })
  }
  onSubmit(): any {
    let userFound = false;
    console.log(this.myForm.value);
  
    for (let data of this.userData) {
      if (data.email === this.myForm.value['email']) {
        userFound = true;
        let userId = data.id;
        if (data.password === this.myForm.value['password']) {
         this.auth.getDetails(this.myForm.value['email'], userId)
          alert("Login Success");
          this.router.navigateByUrl('user');
         
          return; 
        } else {
          alert("Wrong password, Try again");
          return;
        }
      }
    }
  
    
    if (!userFound) {
      alert("User not found");
      this.router.navigateByUrl('/register');
    }
  }
  noAccount(){
    this.router.navigateByUrl('/register')
  }


  }

 