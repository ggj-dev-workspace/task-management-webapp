import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles/common.scss']
})
export class AppComponent {
  title = 'task-management-app';

  constructor(private router: Router) {
  }

  navigateHome() {
    this.router.navigateByUrl('/about');
  }

  navigateTask() {
    this.router.navigateByUrl('/tasks');
  }
}
