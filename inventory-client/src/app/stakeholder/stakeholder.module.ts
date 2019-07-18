import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakeholderRoutingModule } from './stakeholder-routing.module';
import { StakeholderHomeComponent } from './stakeholder-home/stakeholder-home.component';

@NgModule({
  declarations: [StakeholderHomeComponent],
  imports: [
    CommonModule,
    StakeholderRoutingModule
  ]
})
export class StakeholderModule { }
