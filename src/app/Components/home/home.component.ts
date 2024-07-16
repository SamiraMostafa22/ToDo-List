import { Component } from '@angular/core';
import { TasksService } from '../../Services/tasks.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  getRowColorClass(index: number): string {
    return index % 2 === 0 ? 'even-row' : 'odd-row'; // Apply different classes based on even or odd index
  }
  constructor(public taskServices: TasksService, private router: Router) {}
  DeleteTask(i: number) {
    this.taskServices.DeleteTask(i);
  }
  navigateToAddTask() {
    this.router.navigate(['/add-task']);
  }
  navigateToEditTask(i: number) {
    this.router.navigate(['/edit-task', i]);
  }
}
