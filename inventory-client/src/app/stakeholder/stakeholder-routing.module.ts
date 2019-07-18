import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StakeholderHomeComponent } from './stakeholder-home/stakeholder-home.component';

const routes: Routes = [
  {path:'',component:StakeholderHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StakeholderRoutingModule { }
