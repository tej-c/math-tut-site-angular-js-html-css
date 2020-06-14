import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';



@NgModule({
  declarations: [HeadComponent, LayComponent],
  imports: [
    CommonModule
  ],
  exports:[HeadComponent]
})
export class UseriModule { }
