import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent {
// example 1
  hidden:boolean;
  onlike:boolean= true;
  action(){
    this.hidden=true;
  }
  like(){
  this.onlike = !this.onlike
  }


// example 2
  color:string = '';
  colorblack:boolean;
  colorblue:boolean;
  colorred:boolean;
  colororange: boolean;
  clickBlack(colorpicker:string): void{
  this.color = colorpicker;
  this.colorblack = !this.colorblack;
  if(!this.colorblack){
    this.color = '';
  }
}
  clickBlue(colorpicker: string): void{
    this.color = colorpicker;
    this.colorblue = !this.colorblue;
    if(!this.colorblue){
      this.color ='';
    }
  }

  clickred(colorpicker: string): void{
    this.color = colorpicker;
    this.colorred = !this.colorred;
    if(!this.colorred){
      this.color ='';
    }
  }
  clickorange(colorpicker: string): void{
    this.color = colorpicker;
    this.colororange = !this.colororange;
    if(!this.colororange){
      this.color = '';
    }
  }
}
