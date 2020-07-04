import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { MoreBasicsComponent } from './more-basics/more-basics.component';
import { AdvanceComponent } from './advance/advance.component';



@NgModule({
  declarations: [BasicsComponent, MoreBasicsComponent, AdvanceComponent],
  imports: [
    CommonModule
  ]
})
export class TopicsModule { }
