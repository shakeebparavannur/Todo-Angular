import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: { task: string, description: string, priority: string }[] = [];
  onTaskAdded(newTask:any){
    this.taskList.push(
      newTask
    )
  }
}
