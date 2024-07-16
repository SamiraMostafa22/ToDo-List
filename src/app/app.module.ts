import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TasksService } from './Services/tasks.service';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
];

@NgModule({
  declarations: [AppComponent, EditTaskComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
