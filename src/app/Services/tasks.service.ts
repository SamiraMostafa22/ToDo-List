import { Injectable } from '@angular/core';
import { Task } from '../Interface/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  getTaskById(taskId: string): Task {
    throw new Error('Method not implemented.');
  }
  tasks: Task[] = [
    {
      taskName: 'Social Quiz',
      taskDescription: 'On all labs',
      taskDate: '2024-04-16',
      isCompleted: false,
      isEditable: false,
    },
    {
      taskName: 'Gis Lab',
      taskDescription: 'On all labs 15 mark (soooooooooooooo sad)',
      taskDate: '2024-04-22',
      isCompleted: false,
      isEditable: false,
    },
    {
      taskName: 'Hci Assignment',
      taskDescription: 'To do list',
      taskDate: '2024-04-18',
      isCompleted: false,
      isEditable: false,
    },
  ];
  constructor() {}
  DeleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
  saveTask(taskName: any, taskDescription: any, taskDate: any) {
    this.tasks.push({
      taskName,
      taskDescription,
      taskDate,
      isCompleted: false,
      isEditable: false,
    });
  }
  UpdateTask(id: any, task: any) {
    this.tasks[id] = task;
  }
}
