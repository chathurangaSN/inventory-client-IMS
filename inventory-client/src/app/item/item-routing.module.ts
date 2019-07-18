import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemHomeComponent } from './item-home/item-home.component';

const routes: Routes = [
  {path:'',component:ItemHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
