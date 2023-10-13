import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent {
  @Input() tasks:{task:string,description:string,priority:string}[]=[]
}
  
