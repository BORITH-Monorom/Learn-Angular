import { inject} from "@angular/core";
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


 
export const dashboardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  console.log(token);
  if(token){
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};



// @Injectable()
// constructor (private auth : AuthService) {}
