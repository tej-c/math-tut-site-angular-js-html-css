import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { ConComponent } from './con/con.component';




@NgModule({
  declarations: [HeadComponent, LayComponent, ConComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  exports:[HeadComponent,LayComponent,ConComponent]
})
export class UseriModule { }
