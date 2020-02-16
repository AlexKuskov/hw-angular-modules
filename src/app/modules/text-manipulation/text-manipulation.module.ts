import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CensorPipe } from './pipes/censor.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';



@NgModule({
  declarations: [TruncatePipe, CensorPipe, CapitalizePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TruncatePipe,
    CensorPipe,
    CapitalizePipe
  ]
})
export class TextManipulationModule { }
