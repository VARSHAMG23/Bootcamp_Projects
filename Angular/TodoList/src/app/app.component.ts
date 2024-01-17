// src/app/app.component.ts
import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1 [style.color]="highlightColor" class="header">TO-DO LIST</h1>
    <input [(ngModel)]="newTask" placeholder="New Task" class="input-field" />
    <button (click)="addTask()" class="add-button">Add</button>
    

      <ul>
      <div *ngFor="let task of tasks" class="task-item" (click)="completeTask(task)">
        <span>{{ task.description }}</span>
        &nbsp;<button (click)="completeTask(task)" class="add-button_1">Complete</button>
      </div>
    </ul>
    
    

    </div>
  `,
  styles: [`

  /* Add this to your styles.css or component-specific styles file */
  /* Add this to your styles.css or component-specific styles file */

.header {
  font-size: 24px;
  margin-bottom: 16px;
  
}

.input-field {
  padding: 8px;
  margin-right: 8px;
  border: 2px solid black;
}

.add-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.add-button:hover {
  background-color: #45a049;
}

.add-button_1 {
  background-color: blue;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.add-button_1:hover {
  background-color: green;
}

  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border: 1px solid #ccc;
    margin-bottom: 8px;
    cursor: pointer;
  }
  
  .task-description {
    flex-grow: 1;
  }
  
.completed .task {
  text-decoration: line-through;
}
  .complete-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .complete-button:hover {
    background-color: #45a049;
  }
  
    .container {
      max-width: 400px;
      margin: auto;
      font-family: Arial, sans-serif;
    }

    input, button {
      margin-top: 10px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    .task-item {
      display: flex;
      align-items: center;
      margin-top: 8px;
      border:2px solid black;
    }

    .task-item input {
      margin-right: 8px;
    }
  `],
})
export class AppComponent {
  newTask: string = ''; //holds value of new task input
  tasks: Task[] = []; //holds array of task
  public highlightColor="Blue";
  constructor(private taskService: TaskService) {}
  //dependency injection
  ngOnInit() {
    this.getTasks(); //to fetch tasks
  }

  //Adds a new task using taskService and refreshes the task list.
  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => (this.tasks = tasks));
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
      this.getTasks(); // Refresh the task list
    }
  }
  // completeTask(id: number): void {
  //   this.taskService.toggleTaskCompletion(id);
  //   this.getTasks(); // Refresh the task list after completing a task
  // }
  // Assuming your task model has an 'id' property
 completeTask(task: Task): void {
  this.taskService.toggleTaskCompletion(task.id);
  this.tasks = this.tasks.filter(t => t.id !== task.id);
  
}

  
}
