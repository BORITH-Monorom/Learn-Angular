import { Component} from '@angular/core';
import { Breakpoints ,BreakpointObserver, BreakpointState} from '@angular/cdk/layout'
import {Observable} from 'rxjs';
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

  constructor(private breakpointObserver: BreakpointObserver){}

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

}
