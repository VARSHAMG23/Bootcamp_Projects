import { Component, OnInit } from '@angular/core';

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
  constructor() {
    
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


}

  onLogin(): void {
    debugger
    const isUSerExist=this.signupUsers.find(m => m.userName==this.loginObj.userName && m.password==this.loginObj.password);
    if(isUSerExist!=undefined) {
    alert("Login Success");

  }
  else{
    alert("Login Failure");
  }


}
}
