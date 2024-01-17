import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-test',
  template:`<h2> Welcome {{name}}!</h2>
  <h2>{{2+2}}</h2>
  <h2 class="text-success">{{"Good Morning"+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input type="text" value="Varsha">
  <input bind-disabled="isDisabled" [id]="myId" type="text" value="Varsha">
  <input  [id]="myId" type="text" value="Varsha">
  <h2 [class]="successClass">Good Evening</h2>
  <h2 class="text-special" [class]="successClass">Meow Meow</h2>
  <h2 [class.text-danger]="haserror">Danger</h2>
  <h2 [ngClass]="messageClasses">Dlithe Team</h2>
  <h2 [style.color]="'orange'">Orange</h2>
  <h2 [style.color]="haserror ? 'red':'green'">Style Bindings</h2>
  <h2 [style.color]="highlightColor">Hello Team(Style binding)</h2>
  <h2 [ngStyle]="titleStyles">Hello Everyone (Style Binding)</h2>
  
  <button (click)="onClick()">Click</button>
  {{greeting}}
  <button (click)="greeting='welcome Varsha'">Submit</button>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  <input [(ngModel)]="topic" type="text">
  {{topic}}
  `,
  //<button (click)="onClick($event)">Event Handling</button>{{greeting}}
  //html attribute values specifies initial value,DOM value property is the current value,value attribute remains same where value property change
  // <h2>{{a=2=2}}</h2> Assignments are not possible and access global javascript variables
  // styles: [`.text-success{
  //   color:green;
  // }
  // .text-danger{
  //   color:red;
  // }
  // .text-special{
  //   font-style:italic;
  // }
  // `]


  /*
  Style Binding
  */

  styles:[]
})
export class TestComponent implements OnInit {

  public name="Varsha";
  public topic="Two-Way Binding";
  public greeting="";
  public haserror=true;
  public successClass="text-success";
  public siteUrl=window.location.href;
  public myId="testId"; //Binding property
  public isDisabled= false;
  public isSpecial=true;
  public highlightColor="orange";
  public messageClasses={
    "text-success":!this.haserror,
    "text-danger":!this.haserror,
    "text-special":this.isSpecial,
  }
  public titleStyles={
    color:"blue",
    fontStyle:"italic",
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }
  //event binding
  // onClick(event:any){
  //   console.log(event);
  //   this.greeting='Welcome To Bootcamp';
  // }

  onClick(){
    console.log("Welcome to Bootcamp");

  }
  logMessage(value:any){
    console.log(value);
  }



}
//class to template : binding using {{}},from binding class to binding template