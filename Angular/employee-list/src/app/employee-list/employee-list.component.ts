import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template:`
  <h2>Employee List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
 




  `,
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {
  public errorMsg:any;
  public employees:any=[
   
  ];

  //WITHOUT SERVICES
  // public employees=[
  //   {"id": 1,"name": "Varsha","age":22},
  //   {"id": 2,"name": "Skandana","age":23},
  //   {"id": 3,"name": "Spoorthi","age":24},
  //   {"id": 4,"name": "Sanjana","age":21}
 
  //  ];





  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
  this.employees=this._employeeService.getEmployees();
  this._employeeService.getEmployees()
     .subscribe(data=>this.employees=data,
      error => this.errorMsg=error);



  }

}
