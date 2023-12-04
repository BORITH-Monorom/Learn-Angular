import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent {

//example 1
display :boolean =false;
test(){
   this.display = !this.display;
}

//example 2
textcolor:boolean;
test2(){
this.textcolor = !this.textcolor;
}

}
