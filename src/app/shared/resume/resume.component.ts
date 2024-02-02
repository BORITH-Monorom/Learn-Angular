import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
imageReady(blob: Blob) {
console.log(blob)
}
phoneNumber='';
sureName='';
profession= '';
value = '';
firstName='';
country= 'Cambodia';
city='Phnom Penh';
}
