import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildHomeComponent } from './child-home/child-home.component';
import { ChildDetailsComponent } from './child-details/child-details.component';

const routes: Routes = [
  {path:'',component:ChildHomeComponent}
  // {path:'child-details',component:ChildDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
