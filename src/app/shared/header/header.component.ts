import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

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
    public translate: TranslateService
  ) {
    translate.addLangs(['gb', 'kh']);
    translate.setDefaultLang('gb');
  }
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
