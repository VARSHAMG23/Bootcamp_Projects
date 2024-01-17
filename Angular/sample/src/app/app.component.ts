import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Getting Started With Angular';
  name:string = 'Dlithe Team';

  //Property Binding
  isDisabled:boolean = false;
 

  //Event Binding
  userClick(){
    this.isDisabled = true;
  }
  
  //Parent - Child
  public display= true;
  public msg:any='';
  Username:string = 'Dlithe Team';
  Message:any=["Varsha",22]
    
  
  receiveMessage(event:any){
    alert(event)

  }

  display_message(event:any){
   alert(event)
  
   }
  


  // public color="red";
  // public cmd="STOP";

  
}













  // changeColor(){
  //   if(this.color=="red"){
  //     this.color="yellow"
  //     this.cmd="READY"
  //   }
  //   else if(this.color=="yellow"){ 
  //     this.color="rgb(46, 244, 46)"
  //     this.cmd="GO"
  //   }
  //   else {
  //     this.color="red"
  //     this.cmd="STOP"
  //   }
  // }