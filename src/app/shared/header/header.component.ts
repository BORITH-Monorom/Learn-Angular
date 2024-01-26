import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

  export class HeaderComponent implements OnInit {
    isAuthenticated$: Observable<boolean>;
  
    constructor(private auth: AuthService, private router: Router) {}
  
    ngOnInit() {
      this.isAuthenticated$ = this.auth.isAuthenticated();
    }
  
    logout() {
      this.auth.logout();
    }
  
    login() {
      this.router.navigate(['/login']);
    }
}
