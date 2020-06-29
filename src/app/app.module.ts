import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseriModule } from './useri/useri.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicsModule } from './topics/topics.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UseriModule,
    BrowserAnimationsModule,
    TopicsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
