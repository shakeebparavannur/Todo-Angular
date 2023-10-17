import { Component, EventEmitter, Output } from '@angular/core';
import { TaskSeriveService } from '../task-serive.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  task: string = '';
  taskdesc: string = '';
  priority: string = '';
  // taskList:any[] = [];
  // @Output() taskAdded = new EventEmitter<any>();
  // addTask(){
  //   const newTask = {
  //     task: this.task,
  //     description: this.taskdesc,
  //     priority: this.priority
  //   };
  //   this.taskAdded.emit(newTask);
  //   this.task=''
  //   this.taskdesc=''

  // };
  constructor(private taskService: TaskSeriveService,private router:Router) {}

  addTask() {
    const newTask = {
      taskId: this.taskService.taskList.length + 1,
      task: this.task,
      description: this.taskdesc,
      priority: this.priority,
    };
    this.taskService.addTask(newTask);
    console.log(this.taskService.taskList);
    this.router.navigate(['/home'])
  }
}
