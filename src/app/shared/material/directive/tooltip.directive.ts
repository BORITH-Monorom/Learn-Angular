
import {Directive, AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() appTooltip:boolean = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    if (this.appTooltip) {
      // Your truncation logic here
      // Example: Implementing CSS ellipsis
      this.renderer.setStyle(this.el.nativeElement, 'white-space', 'nowrap');
      this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
      this.renderer.setStyle(this.el.nativeElement, 'text-overflow', 'ellipsis');
    }
  }
}
