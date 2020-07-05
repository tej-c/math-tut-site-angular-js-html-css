import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseriModule } from './useri/useri.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicsModule } from './topics/topics.module';
import { SubscribeComponent } from './useri/subscribe/subscribe.component';
import { createCustomElement } from '@angular/elements';
import { app } from 'firebase';

const config = {
  apiKey: "AIzaSyD1Ly6wU0WoSo8JOLvd6es32QNOxYhwdYk",
  authDomain: "focus-poet-274711.firebaseapp.com/",
  databaseURL: "https://focus-poet-274711.firebaseio.com/",
  projectId: "focus-poet-274711",
  storageBucket: "focus-poet-274711.appspot.com",
  messagingSenderId: "948979793337"
}


@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UseriModule,
    BrowserAnimationsModule,
    TopicsModule,
    AngularFirestoreModule,
    AngularFireModule,
    FormsModule,
    AngularFireModule.initializeApp(config)
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
