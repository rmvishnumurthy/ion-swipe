import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { IonSwipeModule } from 'ion-swipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(),IonSwipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
