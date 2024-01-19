import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app-state';
import { increment, decrement, reset } from '../store/counter.actions';

@Component({
  selector: 'app-store-ngrx',
  templateUrl: './store-ngrx.component.html',
  styleUrls: ['./store-ngrx.component.scss']
})
export class StoreNgrxComponent {
  counter$ = this.store.select('counter');
  constructor(private store: Store<AppState>){}
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }
}
