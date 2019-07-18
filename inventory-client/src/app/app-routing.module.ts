import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'dashboard',
  //       pathMatch: 'full'
  //     },
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'stock', component: StockComponent },
  //     { path: 'stackHolder', component: StackHolderComponent },
  //     { path: 'report', component: ReportComponent },
  //     { path: 'contact', component: ContactComponent },
  //     { path: 'more', component: MoreComponent }
  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'child',
    loadChildren: () => import('./child/child.module')
      .then(mod => mod.ChildModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module')
      .then(mod => mod.ItemModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module')
      .then(mod => mod.InvoiceModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module')
      .then(mod => mod.StockModule)
  },
  {
    path: 'stakeholder',
    loadChildren: () => import('./stakeholder/stakeholder.module')
      .then(mod => mod.StakeholderModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module')
      .then(mod => mod.ReportModule)
  },
  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
