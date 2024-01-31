import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mySignup!: FormGroup;
  userData: any;
  myObj = {
    name: '',
    phone: '',
    email: '',
    password: ''
  };
  showAdditionalFields = false;
  myUrl = "http://localhost:3000/users";

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.mySignup = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.minLength(5), Validators.required]],
    });
  }

  ngOnInit(): void {
    this.auth.getData(this.myUrl).subscribe(response => {
      this.userData = response;
      console.log(this.userData);
    });
  }

  onSubmit(): any {
    this.showAdditionalFields = true;
    let user = false;

    for (let data of this.userData) {
      if (data.email === this.mySignup.value['email']) {
        user = true;
        alert("User already exists");
        break;
      }
    }

    if (!user ) {
      this.myObj.email = this.mySignup.value['email'];
      this.myObj.password = this.mySignup.value['password'];
      this.auth.postData(this.myUrl, this.myObj).subscribe();

      alert("Account Created Successfully");
    }

    // Navigate to login page
    this.router.navigateByUrl('/login');
  }

  noAccount() {
    this.router.navigateByUrl('/login');
  }
}
