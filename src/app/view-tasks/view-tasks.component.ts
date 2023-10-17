import { Component, Input,OnInit } from '@angular/core';
import { TaskSeriveService } from '../task-serive.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  // @Input() tasks:{task:string,description:string,priority:string}[]=[]
  tasks:any[]=[]
  constructor(private taskservice: TaskSeriveService){}
  
  ngOnInit(): void {
      this.tasks = this.taskservice.taskList
      console.log(this.tasks);
      
  }


}
  
