import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean{
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// matcher = new MyErrorStateMatcher();
email: string = '';
password: string = '';

constructor(private auth: AuthService, private router: Router, private spinner: NgxSpinnerService){}
loginForm: FormGroup;

ngOnInit(): void {
  this.loginForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });
}

login(){
  this.spinner.show();
  this.auth.login(this.email, this.password).then(()=>{
    this.spinner.hide();
  })
  .catch(() =>{

  })
  ;

  // setTimeout(() => {
  //   this.spinner.hide();
  // }, 1000);

  if(this.email == '' || this.password == ''){

  }else{
    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: "top",
    //   showConfirmButton: false,
    //   timer: 2000,
    //   timerProgressBar: false,
    //   didOpen: (toast) => {
    //     toast.onmouseenter = Swal.stopTimer;
    //     toast.onmouseleave = Swal.resumeTimer;
    //   }
    // });
    // Toast.fire({
    //   icon: "error",
    //   title: "Incorrect Password."
    // });
    // return;
  }

  // if(this.password == ''){
  //   return;
  // }
  // const redirectUrl = this.router.url;
  // this.auth.setRedirectUrl(redirectUrl);

  // this.auth.login(this.email, this.password);
  // this.email = '';
  // this.password = '';
}

signInWithGoogle(){
  this.auth.googleSignIn();
}

}
