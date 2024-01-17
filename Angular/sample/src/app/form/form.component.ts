import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';
import{NgForm} from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm:FormGroup
  constructor(private router:Router, private auth:AuthServiceService,private fb:FormBuilder ,private http:HttpClient,private dataService:DataService ) { }
  start() {

    this.router.navigateByUrl('/display');
  }
//   ngOnInit(): void {
//    console.log("isLoggedIn",this.auth.isLoggedIn());
//   }
//   onSubmit(form:NgForm){
//  if(form.value.name===""||form.value.title===""){
//  alert("Invalid Form");

//   }
//   else{
//     alert("Success");
//   }


ngOnInit(): void {
    this.myForm=this.fb.group({
      title:['',Validators.required],
      body:['',Validators.required]
    })
    // this.http.post(url, data).subscribe(response => {
    //   console.log('POST Request was successful', response);
    // }, error => {
    //   console.error('Error during POST Request', error);
    // });
    // this.dataService.postData().subscribe((response)=>{
    //   console.log("response",response)
    // })
      
    
}
onSubmit(){

 //Posting
 
  this.dataService.postData(this.myForm.value).subscribe((response)=>{
    console.log("response",response)
  })
  // this.myForm.controls['body'].setErrors
  // console.log(this.myForm.controls['title'].value);
}
public date=new Date;

}




