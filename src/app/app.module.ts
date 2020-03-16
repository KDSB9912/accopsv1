import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateDealComponent } from './create-deal/create-deal.component';
import { FormsModule } from '@angular/forms';
import { ViewDealComponent } from './view-deal/view-deal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Barchart1Component } from './dashboard/barchart1/barchart1.component';
import { Barchart2Component } from './dashboard/barchart2/barchart2.component';
import { TableComponent } from './dashboard/table/table.component';
import { InfoboxComponent } from './dashboard/infobox/infobox.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CreateDealComponent,
    ViewDealComponent,
    DashboardComponent,
    Barchart1Component,
    Barchart2Component,
    TableComponent,
    InfoboxComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
