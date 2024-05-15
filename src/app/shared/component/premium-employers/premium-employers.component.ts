import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-premium-employers',
  templateUrl: './premium-employers.component.html',
  styleUrl: './premium-employers.component.scss'
})
export class PremiumEmployersComponent {
@Output() selectedItem = new EventEmitter();
@Input() hj_title='Premium Employer';
selectItem(itemName: string){
  this.selectedItem.emit(itemName);
}
}
