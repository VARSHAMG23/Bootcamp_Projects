// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.model'; //to define structure

@Injectable({ //service decorator
  providedIn: 'root',
})
export class TaskService { //service class
  private tasks: Task[] = []; //array to store tasks within the service.

  getTasks(): Observable<Task[]> { //Method to retrieve tasks. Returns an observable of tasks using the RxJS of function.
    return of(this.tasks);
  }

  addTask(description: string): void { //This method takes a single parameter description
    const newTask: Task = {
      id: this.tasks.length + 1,
      description,
      completed: false,//task is not completed when initially added.
    };
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
