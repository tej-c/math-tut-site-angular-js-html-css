import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import { FootComponent } from './foot/foot.component';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [HeadComponent, LayComponent, FootComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  exports:[HeadComponent,LayComponent,FootComponent]
})
export class UseriModule { }
