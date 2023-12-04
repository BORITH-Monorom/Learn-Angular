import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent {
// Example 1
  condition:boolean;
  clickMe(){
    this.condition = !this.condition;
  }

// Example 2
}  

