import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  color: string = '#FFF';
  backgroundColor: string = '#0000AA';
  border: string = '1px solid #00FF00';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.unhightlight();
  }

  hightlight() {
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    this.el.nativeElement.style.border = this.border;
  }

  unhightlight() {
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.border = null;
  }
}
