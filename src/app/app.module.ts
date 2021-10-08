import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PadreComponent]
})
export class AppModule { }
