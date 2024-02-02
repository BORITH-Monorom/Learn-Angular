import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb : FormBuilder){}
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
onClear(){
  this.contactForm.reset();
}
submitForm(){}
cancelForm(){}
}
