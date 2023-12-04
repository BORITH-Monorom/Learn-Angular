import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit , OnChanges ,DoCheck{
  @Input() value: string = 'monorom';

  constructor(){
    console.log('constructor called!');
    console.log(this.value );
  }
ngOnChanges(change: SimpleChanges){
  console.log(change);
  console.log('ngOnChanges called');
}
ngOnInit(){
  console.log("ngOnInit called!");
  console.log(this.value);
}
ngDoCheck(){
  console.log("ngDoCheck called!");
}

@Input() receivedMessage: string;

sentMessage(){

}



}
