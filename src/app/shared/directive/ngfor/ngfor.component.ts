import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
//example 1
oddnumber:number[] = [2,4,6,8,10];
evennumber:number[] = [1,3,5,7,9];
onclick:boolean =true;

//example 2
user: any;
constructor(){
  this.user = {
    name: ['monorom','monory','other','otherone','other'],
    title: 'Web Developer',
    address: '1234 Main St, City, State, 10010',
    phone:
     [
      '123-123-123',
      '012-012-012'
     ]
  };
}
}
