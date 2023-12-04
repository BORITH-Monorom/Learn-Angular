import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
receivedMessage: string;

receiveMessage(message: string) {
  // Handle the received message from the child component
  this.receivedMessage = message;
}


data={
  title: '@output()',
  desc: 'In Angular, the @Output decorator is used to create custom events in a child component that can be listened to by the parent component. This allows child components to communicate with their parent components'
}
}
