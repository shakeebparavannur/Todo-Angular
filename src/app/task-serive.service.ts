import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskSeriveService {
  taskList: {
    taskId: number;
    task: string;
    description: string;
    priority: string;
  }[] = [
    {
      taskId: 1,
      task: 'initial data',
      description: 'initial desc',
      priority: 'urgent',
    },
  ];
  addTask(task: any) {
    this.taskList.push(task);
  }
  removeTask(id: number) {
    this.taskList.filter((task) => task.taskId !== id);
  }
  updateTask(id: number, task: any) {
    const _task = this.taskList.find((task) => task.taskId);
    if (_task == null) {
      return null;
    }
    _task.task = task.task;
    _task.description = task.description;
    _task.priority = task.priority;
    _task.priority = task.priority;
  }
  constructor() {}
}
