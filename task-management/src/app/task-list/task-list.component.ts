import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Task } from './task-list.model';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss', '../../styles/common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize() {
    window.screen.width > 767 ? this.isMobile = false : this.isMobile = true;
  }
  tasks: Task[] = [];
  createTask: string = '';
  updatedTask: string = '';
  isUpdate: boolean = false;
  isMobile: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  createTasks() {
    if (this.createTask.trim() !== '') {
      const newTask: Task = {
        name: this.createTask,
      };
      this.tasks.push(newTask);
      this.createTask = '';
    } else {
      const dialogRef = this.dialog.open(TaskDialogComponent, {
        data: {
          message: `It's empty in here! Create one`,
          buttonText: {
            confirm: 'Ok'
          }
        },
      });
    }
    this.isUpdate = false;
  }

  updateTask(tasks: Task) {
    this.createTask = tasks.name;
    this.isUpdate = true;
    const index = this.tasks.indexOf(tasks);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  deleteTask(tasks: Task) {
    const index = this.tasks.indexOf(tasks);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
