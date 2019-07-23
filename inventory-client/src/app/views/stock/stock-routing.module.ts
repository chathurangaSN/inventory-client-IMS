import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockHomeComponent } from './stock-home/stock-home.component';

// sahan
import {BatchStockComponent} from './stock-home/controller/batch-stock/batch-stock.component';
import {TransactionsStockComponent} from './stock-home/controller/transactions-stock/transactions-stock.component';
import {OpenstockStockComponent} from './stock-home/controller/openstock-stock/openstock-stock.component';


const routes: Routes = [
  {path:'',
  component:StockHomeComponent,
  children: [
    { path: 'batch', component: BatchStockComponent },
    { path: 'openStock', component: OpenstockStockComponent },
    { path: 'transactions', component: TransactionsStockComponent }
  ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
