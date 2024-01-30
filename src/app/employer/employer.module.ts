import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobComponent } from "./post-job/post-job.component";
import { DashboardComponent } from "./dashboard/dashboard.component";




@NgModule({
  declarations: [
    PostJobComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class EmployerModule { }
