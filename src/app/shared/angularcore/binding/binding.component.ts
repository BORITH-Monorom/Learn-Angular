import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  interpolation="{{}}"
  Property="[]"
  twoway="[()]"
  Event="()"
  increments=0;
  increment(){
  this.increments +=1;
  }

  data = [{
    title: 'Interpolation {{interpolation}}',
    desc: 'from the component class to a property of an HTML',
    borderClass: 'border border-primary',
    color:'blue'
  },
  {
    title: 'Property Binding {{Property}}',
    desc: 'from the component class to a property of an HTML',
    borderClass: 'border border-info',
    color:'darkred',
  },
  {
    title: 'Two-way Binding {[Two-way]}',
    desc: 'from the component class to a property of an HTML',
    borderClass: 'border border-info',
    color:'darkred',
  },
  {
    title: 'Event Binding {{Event}}',
    desc: 'from an HTML  to  the component class',
    borderClass: 'border border-info',
    color:'darkred',
  },
]
}
