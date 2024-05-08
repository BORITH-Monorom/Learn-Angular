import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{
contactForm: FormGroup<any>;
  constructor(private dialog:MatDialog, private fb:FormBuilder){}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      sureName: ['', Validators.required],
      profession: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    })
  }
imageReady(blob: Blob) {
console.log(blob)
}
phoneNumber='';
sureName='';
profession= '';
email = '';
firstName='';
country= 'Cambodia';
city='Phnom Penh';
onPreview(){
  let _popup = this.dialog.open(PreviewDialogComponent,{
    width:'500px',
    data:{
      title: 'Preview',
      firstName: this.firstName,
      sureName:this.sureName,
      profession:this.profession,
      phoneNumber:this.phoneNumber,
      email:this.email,
      country:this.country,
      city:this.city,

    }
  })

}
}

