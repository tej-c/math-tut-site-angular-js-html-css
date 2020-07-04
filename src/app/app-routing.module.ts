import { AdvanceComponent } from './topics/advance/advance.component';
import { MoreBasicsComponent } from './topics/more-basics/more-basics.component';
import { BasicsComponent } from './topics/basics/basics.component';
import { ContComponent } from './useri/cont/cont.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'contact', component:ContComponent},
  {path:'basics', component:BasicsComponent},
  {path:'moderate', component:MoreBasicsComponent},
  {path:'advanced', component:AdvanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
