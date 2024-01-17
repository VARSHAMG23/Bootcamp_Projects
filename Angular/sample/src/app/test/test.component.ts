import { Component, OnInit,Input,Output,EventEmitter,OnChanges,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 //parent-child relationships

  @Input() username: string |undefined;
  @Input() message: string |undefined;
 
  //Child-parent relationships
  
  @Output() greetEvent=new EventEmitter<string>();
  @Output() studentEvent=new EventEmitter<any>();

  greet(){
    this.greetEvent.emit("Hello"+" "+ this.username);
  }
  
  student(){
     this .studentEvent.emit("Student Table");
    
  }
 

   
  constructor() { }

  ngOnInit(): void {
    //  this.username = "test"; 
    // console.log("Welcome Im from Parent");
    //this.username = "test"; displays modified msgs
  }

  // ngOnChanges(changes:):void{
  //   if(changes){
  //     console.log(changes)
  //   }
  // ngAfterViewInit():void {
  //   this.username ="Changed after view";
  // console.log("ngAfterView");
  // }
  
}
