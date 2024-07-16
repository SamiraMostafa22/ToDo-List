import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
