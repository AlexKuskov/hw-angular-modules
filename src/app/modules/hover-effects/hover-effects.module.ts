import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ItalicDirective } from './directives/italic.directive';



@NgModule({
  declarations: [HighlightDirective, ItalicDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ItalicDirective
  ]
})
export class HoverEffectsModule { }
