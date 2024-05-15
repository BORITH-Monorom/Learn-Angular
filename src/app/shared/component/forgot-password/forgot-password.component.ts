import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private auth: AuthService){}
  forgotPasswordForm: FormGroup<any>;
  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email :new FormControl('',[Validators.required, Validators.email]),
    })
  }
  password: any;
  email:string = '';
  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
