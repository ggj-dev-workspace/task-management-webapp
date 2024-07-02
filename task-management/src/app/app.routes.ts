import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: HomePageComponent },
    { path: 'tasks', component: TaskListComponent }];
