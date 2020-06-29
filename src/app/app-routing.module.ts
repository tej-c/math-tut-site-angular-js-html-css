import { BasicsComponent } from './topics/basics/basics.component';
import { ContComponent } from './useri/cont/cont.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'contact', component:ContComponent},
  {path:'basics', component:BasicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
