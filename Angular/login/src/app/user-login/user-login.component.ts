// import { Component, OnInit } from '@angular/core';
// import{Router} from '@angular/router';
// import { FormBuilder,FormGroup,Validators } from '@angular/forms';




// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.css']
// })
// export class UserLoginComponent implements OnInit {
//   myForm: FormGroup;
 
//   constructor(private router:Router,private fb:FormBuilder) { }

// //Routing
//  dashboard(){
//   this.router.navigateByUrl('/')

//  }

//   ngOnInit(): void {

//     this.myForm=this.fb.group({
//       name:['',Validators.required],
//       email:['',Validators.email],
//       password:['',Validators.maxLength(8)]
//     })

//   }
//   onSubmit(){
//     this.router.navigateByUrl('/home')
//     alert('Login  successful')
//     const name = this.myForm.get('name').value;
//     const email = this.myForm.get('email').value;
//     const password = this.myForm.get('password').value;
//     console.log('Login Data:', {
//       name,
//       email,
//       password
//     });

//     }

    
  

// }
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// const registeredUsers = [
//   { name: 'Varsha', email: 'vv@gmail.com', password: 'password' },
//   { name: 'Jane Doe', email: 'jane@example.com', password: 'password' }
// ];

// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.css']
// })
// export class UserLoginComponent implements OnInit {
//   myForm: FormGroup;
//   loggedUsers: any[] = [];

//   constructor(private router: Router, private fb: FormBuilder) { }

//   // Routing
//   dashboard() {
//     this.router.navigateByUrl('/');
//   }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       email: ['', Validators.email],
//       password: ['', Validators.maxLength(8)]
//     });
//   }

//   onSubmit() {
//     const enteredEmail = this.myForm.get('email').value;
//     const enteredPassword = this.myForm.get('password').value;

//     // Check if the user is registered
//     const user = registeredUsers.find(u =>
//       u.email === enteredEmail && u.password === enteredPassword
//     );
//     const userData = this.logFormData();
//     if (user) {
//       // Log the form data to the console
     

//       // Append the logged-in user to the array
//       this.loggedUsers.push(userData);

//       // Check if the email and password match the specific criteria for admin
//       if (enteredEmail === 'vv@gmail.com' && enteredPassword === 'password') {
//         this.router.navigateByUrl('/Admin_login');
//       } else {
//         this.router.navigateByUrl('/');
        
//       }

//       alert('Login successful');
//     } else {
//       this.router.navigateByUrl('/');
//       alert('Invalid email or password. Please try again.');
//       //const userData = this.logFormData();
//       this.loggedUsers.push(userData);
//     }
//   }

//   private logFormData() {
//     // Extract values from the form
//     const email = this.myForm.get('email').value;
//     const password = this.myForm.get('password').value;

//     // Log the form data to the console
//     console.log('Login Data:', {
//       email,
//       password
//     });

//     // Return the form data as an object
//     return {
//       email,
//       password
//     };
//   }
// }
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
   signupUsers:any[]=[];
   signupObj:any={
   userName:'',
   email:'',
   password:''
  };

   loginObj:any={
    userName:'',
    email:'',
    password:''
  };
  constructor(private router:Router) {
    
   }


  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUsers');
    if(localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
  }

  onSignUp():any{

    this.signupUsers.push(this.signupObj);
    //To Store Array in Local Storage

  localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
  
  this.signupObj={
  userName:'',
  email:'',
  password:''
 };

 alert("Registration Success");
}

  onLogin(): void {
    debugger
    const isUSerExist=this.signupUsers.find(m => m.userName==this.loginObj.userName && m.password==this.loginObj.password);
    if(isUSerExist!=undefined) {
    alert("Login Success");
    this.router.navigateByUrl('/home');

  }
  else{
    alert("Login Failure");
  }


}
}
