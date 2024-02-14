import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb : FormBuilder, private dialog:MatDialog ){}
  // SETLECT TABS
  // mainTab = 0;
  // changeMainTab($event:any) {
  //   this.mainTab = $event.index;
  // }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contact: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator]],
      comment: ['', Validators.required]
    });
  }


  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (control.value && !emailPattern.test(control.value)) {
      return { 'invalidEmail': true };
    }
    return null;
  }
openDialog(){
  let _popup =this.dialog.open(DialogComponent,{
    width:'500px',
    enterAnimationDuration: '250ms',
    exitAnimationDuration: '250ms',
    data:{
      title: 'Contact Us',
      content: 'Thank you for contacting us. We will get back to you soon.'
    }
  });
  _popup.afterClosed().subscribe(item => {
    console.log(item);
  })
}
onClear(){
  this.contactForm.reset();
}
submitForm(){}
cancelForm(){}
}
