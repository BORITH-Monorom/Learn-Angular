import { Component } from '@angular/core';

@Component({
  selector: 'app-childcontent',
  templateUrl: './childcontent.component.html',
  styleUrls: ['./childcontent.component.scss']
})
export class ChildcontentComponent {

like:boolean =true;
onclick(){
this.like = !this.like;
}
}
