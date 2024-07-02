import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomePageComponent,
        TaskListComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }