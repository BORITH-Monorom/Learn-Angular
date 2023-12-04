import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-name-nav',
  templateUrl: './name-nav.component.html',
  styleUrls: ['./name-nav.component.scss']
})
export class NameNavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    pageTitle: string = "Learn_Angular";
    updatePageTitle(newTitle: string): void{
      this.pageTitle = newTitle;
    }
}
