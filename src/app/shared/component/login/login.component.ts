import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email: string = '';
password: string = '';

constructor(private auth: AuthService, private router: Router, private spinner: NgxSpinnerService){}
ngOnInit(): void {
}
login(){
  this.spinner.show();
  this.auth.login(this.email, this.password).then(()=>{
    this.spinner.hide();
    this.email = '';
    this.password = '';
  })
  .catch(() =>{
    this.spinner.hide();
    alert('Login failed')
  })
  ;

  // setTimeout(() => {
  //   this.spinner.hide();
  // }, 1000);

  if(this.email == ''){
    alert('please enter email');
    return;
  }

  if(this.password == ''){
    alert('please enter password');
    return;
  }
  // const redirectUrl = this.router.url;
  // this.auth.setRedirectUrl(redirectUrl);

  // this.auth.login(this.email, this.password);
  // this.email = '';
  // this.password = '';
}



}
