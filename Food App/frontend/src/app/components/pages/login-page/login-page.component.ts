import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
   // Declaring a loginForm variable of type UntypedFormGroup for handling form data
  loginForm!:UntypedFormGroup;

  // Declaring a variable to track form submission status
  isSubmitted = false;

   // Declaring a variable to hold the return URL for navigation after successful login
  returnUrl='';
  constructor(private userService:UserService,private formBuilder:UntypedFormBuilder,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.required]],
      password:['', Validators.required]
   
    });

    // Retrieving the return URL from route query parameters
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl;
  }

//getter property
  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    // Setting form submission status to true
    this.isSubmitted = true;

    if(this.loginForm.invalid) return;

    // Calling the UserService to login with email and password
    this.userService.login({email:this.fc.email.value,password:this.fc.password.value}).subscribe(()=>{
    this.router.navigateByUrl(this.returnUrl);
     });
     
    alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`)
  }

}
