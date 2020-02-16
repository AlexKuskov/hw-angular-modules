import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverEffectsModule } from './modules/hover-effects/hover-effects.module';
import { TextManipulationModule } from './modules/text-manipulation/text-manipulation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HoverEffectsModule,
    TextManipulationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
