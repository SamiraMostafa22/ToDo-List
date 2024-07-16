import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../Services/tasks.service';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  constructor(private router: Router , private taskServices : TasksService){}
  navigateToHome() {
    this.router.navigate(['/']);
  }
  saveTask(title: { value: any; } , describtion: { value: any; } , date: { value: any; }){
    this.taskServices.saveTask(title.value , describtion.value , date.value);
    this.router.navigate(['/'])
  }
}
