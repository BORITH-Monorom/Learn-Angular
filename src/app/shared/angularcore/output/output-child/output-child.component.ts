import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
    sendMessage(){
      this.messageEvent.emit('Hello from Child');
    }
}
