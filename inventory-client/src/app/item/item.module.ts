import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemHomeComponent } from './item-home/item-home.component';

@NgModule({
  declarations: [ItemHomeComponent],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
