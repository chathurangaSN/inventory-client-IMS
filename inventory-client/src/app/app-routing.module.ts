import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  },
  {path:'home',
  component:DefaultLayoutComponent,
  children:[
    {
      path: 'dashboard',
      loadChildren: () => import('./views/dashboard/dashboard.module')
        .then(mod => mod.DashboardModule)
    },
    {
      path: 'child',
      loadChildren: () => import('./views/child/child.module')
        .then(mod => mod.ChildModule)
    },
    {
      path: 'item',
      loadChildren: () => import('./views/item/item.module')
        .then(mod => mod.ItemModule)
    },
    {
      path: 'invoice',
      loadChildren: () => import('./views/invoice/invoice.module')
        .then(mod => mod.InvoiceModule)
    },
    {
      path: 'stock',
      loadChildren: () => import('./views/stock/stock.module')
        .then(mod => mod.StockModule)
    },
    {
      path: 'stakeholder',
      loadChildren: () => import('./views/stakeholder/stakeholder.module')
        .then(mod => mod.StakeholderModule)
    },
    {
      path: 'report',
      loadChildren: () => import('./views/report/report.module')
        .then(mod => mod.ReportModule)
    }
  ]
},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
