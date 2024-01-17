import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor( private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.email],
      password:['',Validators.maxLength(8)]
    })
  }

  login(){
    this.router.navigateByUrl('/user')
  }
  onSubmit(){
  this.router.navigateByUrl('/home')
  alert('Account Created successfully')
  }
}
