import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContComponent } from './cont/cont.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [HeadComponent, LayComponent, ContComponent, AboutComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatInputModule
  ],
  exports:[HeadComponent,LayComponent,ContComponent]
})
export class UseriModule { }
