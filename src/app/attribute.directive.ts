import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private elmentREf:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseover') changeBgColor() {
    // change background color on hover to teal
    // change text color on hover to white
    this.renderer.setStyle(this.elmentREf.nativeElement, 'background-color', 'teal');
    this.renderer.setStyle(this.elmentREf.nativeElement, 'color', 'white');
  }

  @HostListener('mouseout') changeBackBgColor() {
    // change background color on hover to #E0E0E0
    // change text color on hover to black
    this.renderer.setStyle(this.elmentREf.nativeElement, 'background-color', '#E0E0E0');
    this.renderer.setStyle(this.elmentREf.nativeElement, 'color', 'black');
  }

}
