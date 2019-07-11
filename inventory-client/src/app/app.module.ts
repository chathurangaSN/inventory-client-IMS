import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './home/item/item.component';
import { StockComponent } from './home/stock/stock.component';
import { StackHolderComponent } from './home/stack-holder/stack-holder.component';
import { InvoiceComponent } from './home/invoice/invoice.component';
import { ReportComponent } from './home/report/report.component';
import { ContactComponent } from './home/contact/contact.component';
import { MoreComponent } from './home/more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    ItemComponent,
    StockComponent,
    StackHolderComponent,
    InvoiceComponent,
    ReportComponent,
    ContactComponent,
    MoreComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
