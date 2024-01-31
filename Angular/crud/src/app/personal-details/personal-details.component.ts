import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder,FormControlName,UntypedFormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  
  myForm!:UntypedFormGroup
  updatingItem='';
  myObject:any={
    email:"",
    list:[]
  };
  id:any;
  email:any;
  userId:any;
  display=false
  displayIndex:any;
  buttonStatus:any;

  myUrl='http://localhost:3000/details';
  myUserUrl='http://localhost:3000/users'
  
  
  userDetails:any={};

  constructor(private fb:UntypedFormBuilder,private router:Router,private dataService:DataService) { 
    
  }

  

  ngOnInit(): void {
    var dataReceived=this.dataService.receivedDetails();
    this.email=dataReceived[0]
    this.userId=dataReceived[1]
    this.dataService.getData(`${this.myUserUrl}?email=${this.email}`).subscribe((response)=>{
      this.userDetails=response;
      this.myForm=this.fb.group({
        firstName:[this.userDetails[0].firstName,Validators.required],
        lastName:[this.userDetails[0].lastName,Validators.required],
        email:[this.userDetails[0].email,Validators.email],
        gender:[this.userDetails[0].gender,Validators.required],
        dob:[this.userDetails[0].dob,Validators.required],
        password:[this.userDetails[0].password,[Validators.minLength(5),Validators.required]]
  
      })

    this.buttonStatus=this.dataService.buttonStatus()

      
  })
  
  }
  
  

  
  

  onClick(){
    
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUserUrl}?email=${this.userDetails[0].email}`,this.myForm.value).subscribe();
        this.dataService.deleteContent(`${this.myUserUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
        

      }
    );
}
  loading(){
    var dataReceived=this.dataService.receivedDetails();
    this.email=dataReceived[0]
    this.userId=dataReceived[1]
    console.log("this is my emial man");
    
    this.dataService.getData(`${this.myUserUrl}?email=${this.email}`).subscribe((response)=>{
      this.userDetails=response;    
  })
  }

  deleteItem(index:number){
    this.userDetails[0].list.splice(index,1)
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list.slice();
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
        
        

      }
    );
    
  }

  updateDisplay(index:number,details:string){
    this.display=true
    this.displayIndex=index
    this.updatingItem=details

    
  }
  updateItem(){
    console.log(this.updatingItem);
    
    this.userDetails[0].list.splice(this.displayIndex,1,this.updatingItem)
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list.slice();
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
      }
    );
    this.display=false
    
    
  }
  deleteAccount(){
    this.id=this.userDetails[0].id
    console.log(`${this.myUrl}/${this.id}`);
    this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        console.log(this.userId);
        console.log(`${this.myUrl}/${this.userId}`);

        
        
      }
    );
    console.log(`${this.myUserUrl}/${this.userId}`);
    this.dataService.deleteContent(`${this.myUserUrl}/${this.userId}`).subscribe(
      () => {
        console.log('user deleted successfully.');
      }
    );
    this.router.navigateByUrl('signup')
  }

  rollBack(){
    this.buttonStatus=false
    this.router.navigateByUrl('admin')
  }

  logout(){
    this.router.navigateByUrl('login')
  }
  goBack(){
    this.router.navigateByUrl('userpage')
  }
 
}