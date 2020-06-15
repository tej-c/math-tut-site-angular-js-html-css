import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import { FootComponent } from './foot/foot.component';



@NgModule({
  declarations: [HeadComponent, LayComponent, FootComponent],
  imports: [
    CommonModule
  ],
  exports:[HeadComponent,LayComponent,FootComponent]
})
export class UseriModule { }
