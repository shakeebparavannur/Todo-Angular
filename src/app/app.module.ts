import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path:'home',component:ViewTasksComponent},
  {path:'add-task', component:AddTaskComponent},
  {path:'task/:taskId',component:ViewTaskComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTasksComponent,
    ViewTaskComponent
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
