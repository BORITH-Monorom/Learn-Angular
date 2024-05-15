import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
email:string = '';
password:string = '';
confirmPassword:string = '';
constructor(private auth: AuthService) {};
register(){
  if(this.email == '' || this.password == '' || this.confirmPassword == ''){
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "warning",
      title: "All fields are required"
    });
    return;
  }

  if(this.password != this.confirmPassword){
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "warning",
      title: "Password does not match"
    });
    return;
  }

  this.auth.register(this.email, this.password);
  this.email = '';
  this.password = '';
  this.confirmPassword = '';
}
}
