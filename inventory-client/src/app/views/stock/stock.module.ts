import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockHomeComponent } from './stock-home/stock-home.component';
import { BatchStockComponent } from './stock-home/controller/batch-stock/batch-stock.component';
import { OpenstockStockComponent } from './stock-home/controller/openstock-stock/openstock-stock.component';
import { TransactionsStockComponent } from './stock-home/controller/transactions-stock/transactions-stock.component';

// sahan

import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [StockHomeComponent, BatchStockComponent, OpenstockStockComponent, TransactionsStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule
    // BrowserAnimationsModule,
    //  ToastrModule.forRoot()
    // HttpClientModule
   
  ]
})
export class StockModule { }
