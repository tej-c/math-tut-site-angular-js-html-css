import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import { FootComponent } from './foot/foot.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [HeadComponent, LayComponent, FootComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports:[HeadComponent,LayComponent,FootComponent]
})
export class UseriModule { }
