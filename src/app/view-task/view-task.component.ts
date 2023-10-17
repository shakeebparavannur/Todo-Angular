import { Component, OnInit } from '@angular/core';
import { TaskSeriveService } from '../task-serive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
      constructor(private taskservice:TaskSeriveService,private route:ActivatedRoute ){}
      task:any =[]
 ngOnInit() {
     
   const routeParams = this.route.snapshot.paramMap
   const taskIdFromRoute = Number(routeParams.get('taskId'))
   this.task=this.taskservice.taskList.find(task => task.taskId === taskIdFromRoute)
   console.log(this.task);
   
 }

}
