import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement,reset } from 'src/app/core/store/counter.actions';

@Component({
  selector: 'app-btncounter',
  templateUrl: './btncounter.component.html',
  styleUrls: ['./btncounter.component.scss']
})
export class BtncounterComponent {
constructor(private store : Store<{counter: {counter:number}}>){}

onIncrement(){
  this.store.dispatch(increment())
  console.log(this.store);
}
onDecrement(){
  this.store.dispatch(decrement())
  console.log(this.store.select('counter'));
}
onReset(){
  this.store.dispatch(reset())
  console.log(this.store.dispatch(decrement()));
}
}
