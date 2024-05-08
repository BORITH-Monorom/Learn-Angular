import { CanDeactivateFn } from '@angular/router';
import Swal from 'sweetalert2';

export const canDeactiveGuard: CanDeactivateFn<unknown> = async(component:any, currentRoute, currentState, nextState) => {
  if(component && component?.contactForm && component?.contactForm?.dirty){
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You have unsaved changes!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, discard changes!'
    });
    console.log(result.isConfirmed)
    return result.isConfirmed;
  }
  return true;
};
