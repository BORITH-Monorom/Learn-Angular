import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AppState } from 'src/app/core/state/app.state';
import { selectCount } from 'src/app/core/state/counter/counter.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

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

  // onPrice(){
  //   this.router.navigate(['/price']);
  // }
}
