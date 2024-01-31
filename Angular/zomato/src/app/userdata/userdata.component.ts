import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  myForm:any=FormGroup;
  userDetails:any={};
  myUrl = "http://localhost:3000/users";
  email:any;
  id:any;
  userId:any;
  myObj = {
    name: '',
    phone: '',
    email: '',
    password: ''
  };
  constructor(private fb:FormBuilder,private route:Router,private auth:AuthService) { 

  }

 ngOnInit(): void {

  let values = this.auth.receivedDetails();
  this.email=values[0];
  console.log(this.email);
  this.auth.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=> {
    this.userDetails = response;
    console.log(this.userDetails[0]);
    console.log(this.userDetails.email);
    
  })
  this.myForm=this.fb.group({
    name:[this.userDetails[0].name,Validators.required],
    phone:[this.userDetails[0].phone,Validators.required],
    email:[this.userDetails[0].email,Validators.required],
    password: [this.userDetails[0].password, [Validators.minLength(5), Validators.required]],
    
    });
 
 }


 onClick(){
  this.id=this.userDetails[0].id;
  this.myObj.email = this.myForm.value['email'];
  this.myObj.password = this.myForm.value['password'];
  this.myObj.name = this.myForm.value['name'];
  this.myObj.phone= this.myForm.value['phone'];
  // this.auth.putData(this.myUrl, this.myObj).subscribe();
  this.auth.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myForm.value);
  this.auth.delete(`${this.myUrl}/${this.id}`).subscribe(()=>{
    console.log("Data deleted successfully");
  })
  this.loading();
}

loading(){
  var dataReceived=this.auth.receivedDetails();
  this.email=dataReceived[0]
  this.userId=dataReceived[1]
  this.auth.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
    this.userDetails=response;    
})
}




}
