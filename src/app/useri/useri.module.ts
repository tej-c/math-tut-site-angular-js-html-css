import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContComponent } from './cont/cont.component';




@NgModule({
  declarations: [HeadComponent, LayComponent, ContComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[HeadComponent,LayComponent,ContComponent]
})
export class UseriModule { }
