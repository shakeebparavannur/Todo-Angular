import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task:string ='';
  taskdesc:string = "";
  priority:string=""
  taskList:any[] = [];
  @Output() taskAdded = new EventEmitter<any>();
  addTask(){
    const newTask = {
      task: this.task,
      description: this.taskdesc,
      priority: this.priority
    };
    this.taskAdded.emit(newTask);
    this.task=''
    this.taskdesc=''
      
  };

}
