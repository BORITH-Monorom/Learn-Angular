import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  // SETLECT TABS
  mainTab = 0;
  changeMainTab($event:any) {
    this.mainTab = $event.index;
  }

  // selectedTab = 0;
  // changeTab(tabIndex: number) {
  //   this.selectedTab = tabIndex;
  // }
}
