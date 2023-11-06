import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  activeLink: string = 'binding';
  setActiveLink(link: string) {
    this.activeLink = link;
  }
  show = false;
}
