import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
value: any;
email_value: any;

  constructor(private fb : FormBuilder, private dialog:MatDialog ){}


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5),]],
      email: ['',[Validators.required, Validators.email,]],
      comment: ['', [ Validators.required]]
    });
  }


  // emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  //   if (control.value && !emailPattern.test(control.value)) {
  //     return { 'invalidEmail': true };
  //   }
  //   return null;
  // }
openDialog(){
  let _popup =this.dialog.open(DialogComponent,{
    width:'500px',
    enterAnimationDuration: '250ms',
    exitAnimationDuration: '250ms',
    data:{
      title: 'Contact Us',
      content: 'Are you sure you want to send this email?'
    }

  });
  _popup.afterClosed().subscribe(item => {
    if(item == 'Confirmed'){
      Swal.fire({
        title: 'Thank you for your feedback',
        text: 'We will get back to you soon',
        icon:'success',
        confirmButtonText: 'Ok'
      })
      console.log(item);

    }else if(item == "Closed"){
      Swal.fire({
        title: 'You are canceled',
        icon:'error',
        confirmButtonText: 'Ok',
      })
    }
    this.contactForm.reset();
  })
}
onClear(){
  this.contactForm.reset();
  this.contactForm.clearAsyncValidators;
}
submitForm(){}
cancelForm(){}
}
