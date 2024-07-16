import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interface/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../Services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  task: any;
  taskId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public taskServices: TasksService
  ) {}
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskServices.tasks[this.taskId];
  }
  UpdateTask() {
    this.taskServices.UpdateTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }
}
