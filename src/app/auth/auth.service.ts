import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import {Router} from '@angular/router';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.default.User | null>;
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
  ) {
    this.authState$ = this.fireauth.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => !!user));
  }

  login(email: string, password: string): Promise<void> {
    return this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
      // alert('Login successful');
    }, err => {
      this.router.navigate(['/login']);
    });
  }

  logout(): Promise<void> {
    return this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      const confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.router.navigate(['/login']);
      }
    }, err => {
      alert(err.message);
    });
  }

  // register method
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registeration Sucessful')
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
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

  //sign in with google account
  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      console.log('signing in with google', res);
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    }, err =>{
      alert(err.message);
    })
  }
}
