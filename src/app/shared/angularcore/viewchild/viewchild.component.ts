import { Component, ViewChild ,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements AfterViewInit{
ngAfterViewInit(): void {
  this.age.nativeElement.focus();
  console.log(this.age);
}
@ViewChild('dobInput') dateOfBirth: ElementRef;
@ViewChild('ageInput') age: ElementRef;
calculateAge(){
  let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  this.age.nativeElement.value = age

  console.log(this.dateOfBirth);
  console.log(this.age)
}


}
