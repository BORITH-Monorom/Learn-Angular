import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('token','true');
      if(res.user?.emailVerified == true) {
      alert('Login Sucessful')
        this.router.navigate(['/dashboard']);
      }else{
        alert('Verify First');
        this.router.navigate(['/verify-email']);
      }
    }, err => {
      alert('Someting went wrong');
      this.router.navigate(['/login']);
    })
  }

  // register method
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registeration Sucessful')
      this.router.navigate(['/login']);
      // this.router.navigate(['/verify-email']);
      this.sendEmailForVerification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //sign out
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      alert('Logout sucessful');
    }, err =>{
      alert(err.message);
    })
  }

  //forgot password
  forgotPassword(email : string){
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err =>{
      alert(err.message);
    })
  }

  //email verification
  sendEmailForVerification(user:any){
    user.sendEmailForVerification().then((res : any) =>{
      this.router.navigate(['/verify-email']);
    }, (err:any) => {
      alert ('something went wrong. Not able to send mail to your email.')
    })
  }
}
