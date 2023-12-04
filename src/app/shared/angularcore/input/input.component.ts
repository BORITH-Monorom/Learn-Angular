import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
parent: string = 'data from parent';

data={
  borderClass: 'bg-light border border-primary',
  title:'@Input()',
  desc: 'In Angular, the @Input decorator is used to define input properties in a component. Input properties allow you to pass data from a parent component to a child component.',
  color: 'blue',
}
}
