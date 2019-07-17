import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildHomeComponent } from './child-home/child-home.component';

const routes: Routes = [
  {path:'',component:ChildHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
