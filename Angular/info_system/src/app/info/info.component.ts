import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { infodata } from './info.model';
import { ApiService } from '../servies/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  showadd!:boolean;
  showupdate!:boolean;
   infomodelobj:infodata=new infodata
 
  formValue!:FormGroup;
  allinfo:any;
  constructor( private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      Address:['',Validators.required],
    })
    this.getinfo ()
  }
  add(){
  this.showadd=true;
  this.showupdate=false;
  }

  edit(data:any){
    this.showadd=false;
    this.showupdate=true;
    this.infomodelobj.id=data.id;
    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['email'].setValue(data.email)
    this.formValue.controls['mobile'].setValue(data.mobile)
    this.formValue.controls['Address'].setValue(data.Address)
  }

  //update on edit
  update(){
    
    this.infomodelobj.name=this.formValue.value.name;
    this.infomodelobj.email=this.formValue.value.email;
    this.infomodelobj.mobile=this.formValue.value.mobile;
    this.infomodelobj.Address=this.formValue.value.Address;
    this.api.updateData(this.infomodelobj,this.infomodelobj.id).subscribe(res =>{
      console.log(res)
      this.formValue.reset()
      this.getinfo();
      alert("Success")
    },
    err=>{
      alert("Error")
    })
      
  }

addinfo() {
this.infomodelobj.name=this.formValue.value.name;
this.infomodelobj.email=this.formValue.value.email;
this.infomodelobj.mobile=this.formValue.value.mobile;
this.infomodelobj.Address=this.formValue.value.Address;

this.api.postData(this.infomodelobj).subscribe(res=>{
  console.log(res);
  this.formValue.reset();
  this.getinfo();
  alert("Record Added Successfully")
},
 err=>{
  alert("Something went wrong!")
 })

  }
  //Get information
 getinfo(){
  this.api.getData().subscribe(res=>{
    this.allinfo=res;
  })
 }

 //Delet Info
  deleteinfo(data:any){
  if(confirm("Are you sure you want to delete"))
  this.api.deleteData(data.id).subscribe(res=>{
  alert("Record Deleted Successfully");
  this.getinfo();
},
err=>{
  alert("Error deleting record")
})
}

}
