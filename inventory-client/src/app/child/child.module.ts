import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildHomeComponent } from './child-home/child-home.component';

@NgModule({
  declarations: [ChildHomeComponent],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
