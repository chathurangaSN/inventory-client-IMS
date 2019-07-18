import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildHomeComponent } from './child-home/child-home.component';
import { ChildDetailsComponent } from './child-details/child-details.component';

@NgModule({
  declarations: [ChildHomeComponent, ChildDetailsComponent],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
