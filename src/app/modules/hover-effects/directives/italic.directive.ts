import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective {

  fontSize: string = '48px';
  fontStyle: string = 'italic';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.styleFont();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.unstyleFont();
  }

  styleFont() {
    this.el.nativeElement.style.fontSize = this.fontSize;
    this.el.nativeElement.style.fontStyle = this.fontStyle;
  }

  unstyleFont() {
    this.el.nativeElement.style.fontSize = null;
    this.el.nativeElement.style.fontStyle = null;
  }
}
