import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './home/item/item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './home/stock/stock.component';
import { StackHolderComponent } from './home/stack-holder/stack-holder.component';
import { InvoiceComponent } from './home/invoice/invoice.component';
import { ReportComponent } from './home/report/report.component';
import { ContactComponent } from './home/contact/contact.component';
import { MoreComponent } from './home/more/more.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'item', component: ItemComponent },
      { path: 'stock', component: StockComponent },
      { path: 'stackHolder', component: StackHolderComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'report', component: ReportComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'more', component: MoreComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'child',
    loadChildren: () => import('./child/child.module')
      .then(mod => mod.ChildModule)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
