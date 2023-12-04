import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.scss']
})
export class ParentHookComponent {

inputText:string = '';
ngOnInits: any;
onSubmit(inputEl: HTMLInputElement){
this.inputText= inputEl.value;
}

parentMessage:string = 'Hello from Parent';

}
