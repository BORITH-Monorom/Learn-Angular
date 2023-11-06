import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
clickstatus= 'You are  allowed to click';
noclickstatus= 'You are not allowed to click';
clickable(){
  let temp = this.clickstatus;
  this.clickstatus = this.noclickstatus;
  this.noclickstatus =temp;
}
}
