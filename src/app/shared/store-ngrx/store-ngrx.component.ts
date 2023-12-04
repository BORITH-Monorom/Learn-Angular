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
  // response!: HighlightAutoResult;
  counter$ = this.store.select('counter');

  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test !";
  }`;


// onAppThemeChange(appTheme: 'dark' | 'light') {
//   this.hljsLoader.setTheme(appTheme === 'dark' ? 'assets/styles/solarized-dark.css' : 'assets/styles/solarized-light.css');
// }
  constructor(
    private store: Store<AppState>
    ){}
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
