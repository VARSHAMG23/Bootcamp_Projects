import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-test',

  //ngIf -We need to pass truthy or falsy values
  //ngSwitch
  //ngFor 
  template:`<h1>Welcome!</h1>
   <h2 *ngIf="true">ngIf-Good Evening</h2>
   <h3 *ngIf="displayName;else elseBlock">ngIf-Using Property</h3>
   
   <ng-template #elseBlock>
   <h3 >ngIf-Name is hidden</h3>
   </ng-template>
   

   <div *ngIf="displayName;then thenBlock;else elseBlock"></div>
   <ng-template #thenBlock>
   <h2>Shortcut for ngIf</h2>
   </ng-template>

   <ng-template #elseBlock>
   <h2>Hidden!</h2>
   </ng-template>
   
   <div [ngSwitch]="color">
   <div [style.color]="highlightColor" *ngSwitchCase="'red'">You picked red color</div>
   <div [style.color]="highlightColor_blue" *ngSwitchCase="'blue'">You picked blue color</div>
   <div [style.color]="highlightColor_green" *ngSwitchCase="'green'">You picked green color</div>
   <div  *ngSwitchDefault>Pick Again</div>
   </div>
   

   <div *ngFor="ngFor let color of colors;index as i">
   <h2>{{i}} {{ color }}</h2>
   </div>

   <div *ngFor="ngFor let color of colors;first as f">
   <h2>{{f}} {{ color }}</h2>
   </div>
   
   <div *ngFor="ngFor let color of colors;last as l">
   <h2>{{l}} {{ color }}</h2>
   </div>

   <div *ngFor="ngFor let color of colors;odd as o">
   <h2>{{o}} {{ color }}</h2>
   </div>

   <div *ngFor="ngFor let color of colors;even as e">
   <h2>{{e}} {{ color }}</h2>
   </div>
   

   <h2 [style.color]="highlightColor_parent">{{parentData}}</h2>
   <h2 [style.color]="highlightColor_parent_1">{{parentData_1}}</h2>
   <button (click)="fireEvent()">Send Event</button>

   <h2>{{name}}</h2>
   <h2>{{name | lowercase}}</h2>
   <h2>{{name | uppercase}}</h2>
   <h2>{{name | titlecase}}</h2>
   <h2>{{name | slice:3:5}}</h2>
   <h2>{{person |json}}</h2>

   <h2>{{5.678 |number:'1.2-3'}}</h2>
   <h2>{{5.678|number:'3.4-5'}}</h2>
   <h2>{{5.678 |number:'3.1-2'}}</h2>
   <h2>{{0.25 |percent}}</h2>
   <h2>{{0.25 |currency}}</h2>
   <h2>{{0.25 |currency:'EUR':'code'}}</h2>

   <h2>{{ date}}</h2>
   <h2>{{ date|date:'short'}}</h2>
   <h2>{{ date|date:'shortDate'}}</h2>
   <h2>{{ date|date:'shortTime'}}</h2>
   <h2>{{ date|date:'mediumTime'}}</h2>
   <h2>{{ date|date:'mediumDate'}}</h2>
  
   `,
  styles: []
})
export class TestComponent implements OnInit {
  //ngIf
  displayName=true; //set false to execute else block

  //ngSwitch
  public color="orange";
  public highlightColor="red";
  public highlightColor_blue="blue";
  public highlightColor_green="green";

  //ngFor
  public colors=["red", "green", "blue","yellow"];


  //ParentComponent to Child Component: Delcare property in  bind to child selector

  @Input() public parentData:any;
  public highlightColor_parent="yellow";
  
  @Input('parentData_1') public parentData_1:any;
  public highlightColor_parent_1="magenta";
  constructor() { }


//Child Component to Parent Component declare another properties using event using event emitter using output decorator
  // @Input('parentData_1') public parentData_1:any;
  @Output() public childEvent=new EventEmitter();

  ngOnInit(): void {
  }

  //custom events
   fireEvent(){
    this.childEvent.emit('Hey Codevolution');
   }


   /*PIPES */
   public name="Angular Fundamentals: PIPES"
   
   //json pipe
   //String pipe
   //slice pipe
   //number pipe: '1.2-3' here 2 is min number of decimal digit & 3 is maximum number of decimal digit
   //Currency pipe
   
   //Create object person
   public person={
    "firstName": "John",
    "lastName": "Brown"
   }
   //Date pipe
   public date=new Date;


}

