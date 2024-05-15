import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import { AppState } from 'src/app/core/state/app.state';
import { selectCount } from 'src/app/core/state/counter/counter.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut',[
      state('in', style({
        // transform: 'translateY(0)',
        // backgroundColor: 'red'
      })),
      state('out', style({
        // transform: 'translateY(200px)',
        // backgroundColor: 'blue'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  isExpanded: boolean = false;


darkModeService: DarkModeService = inject(DarkModeService)
toggleDarkMode(){
  this.darkModeService.updateDarkMode();
}

  constructor(
    private auth: AuthService,
    private router: Router,
    public translate: TranslateService,
    private store: Store<AppState>
  ) {
    translate.addLangs(['gb', 'kh']);
    translate.setDefaultLang('gb');
    this.count$ = this.store.select(selectCount);
  }
  count$:Observable<number>;
  currentLang: any;
  ngOnInit() {
    this.isAuthenticated$ = this.auth.isAuthenticated();
  }
  country: string ="fi fi-gb";
  switchLang(lang: string) {
    this.translate.use(lang);

    this.country = `fi fi-${lang}`
    console.log(this.country,"country")
  }
  logout() {
    this.auth.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }

  isToggle: boolean = false;
  toggle(){
    this.isToggle = !this.isToggle;
  }

  // onPrice(){
  //   this.router.navigate(['/price']);
  // }



}
