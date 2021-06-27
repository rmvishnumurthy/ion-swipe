import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { IonSwipeComponent } from './ion-swipe.component';

@NgModule({
  declarations: [
    IonSwipeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  exports: [
    IonSwipeComponent
  ]
})
export class IonSwipeModule { }
