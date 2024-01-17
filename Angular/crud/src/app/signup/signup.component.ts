import { Component, OnInit } from '@angular/core';
//For Reactive Forms
import { FormBuilder,FormGroup,FormControlName,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

//Initialize FormGroup , Form is of type FormGroup
  myForm!: FormGroup;
  userData:any;
  myObj={
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    dob:'',
    password:''
}
myUrl="http://localhost:3000/users"

//User Details
myUrlDetails="http://localhost:3000/details"
myUserDetails={
  email:'',
  list:[]
}

  constructor(private fb:FormBuilder, private router:Router,private dataService:DataService ) {
    
    this.myForm=this.fb.group({

      //Specifiying Feilds and Froming Groups

      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.email],
      gender:['',Validators.required],
      dob:['',Validators.required],
      password:['',[Validators.minLength(5),Validators.required]]

    })

   }

  ngOnInit(): void {
  
    this.dataService.getData(this.myUrl).subscribe(response => {
      this.userData=response;
      console.log(this.userData);
  })

  }

  onSubmit(): any {
    //variable is used to check whether the user already exists.
    let user=false;
    // Iterate through each data in 'userData'
    for (let data of this.userData) {
    // Check if the email in the current 'data' matches the email from the form
     if (data.email===this.myForm.value['email']) {
         user=true;
         alert("User already exists")
         break;
    }
  }
  // user does not exis
  if(!user){
    
    this.dataService.postData(this.myUrl,this.myForm.value).subscribe();
     // Set the email property of 'myUserDetails' with the email from the form
    this.myUserDetails.email = this.myForm.value['email'];
     // Make a POST request to add user details to 'myUrlDetails' using 'myUserDetails'
    this.dataService.postData(this.myUrlDetails,this.myUserDetails).subscribe();
    alert("Account Created Successfully")
  }
     
    //  console.log(this.myForm.value)
     this.router.navigateByUrl('/login')
  }

}
