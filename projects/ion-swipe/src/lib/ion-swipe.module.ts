import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { IonSwipeComponent } from './ion-swipe.component';

@NgModule({
  declarations: [
    IonSwipeComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    IonSwipeComponent
  ]
})
export class IonSwipeModule { }
