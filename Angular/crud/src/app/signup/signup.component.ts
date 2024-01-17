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
    let user=false;
    for (let data of this.userData) {
     if (data.email===this.myForm.value['email']) {
         user=true;
         alert("User already exists")
         break;
    }
  }
  if(!user){

    this.dataService.postData(this.myUrl,this.myForm.value).subscribe();
    alert("Account Created Successfully")
  }
     
    //  console.log(this.myForm.value)
     this.router.navigateByUrl('/login')
  }




}
