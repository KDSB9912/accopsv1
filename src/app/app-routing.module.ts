import { CreateDealComponent } from './create-deal/create-deal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Barchart1Component} from './dashboard/barchart1/barchart1.component';
import { Barchart2Component} from './dashboard/barchart2/barchart2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {path: '' , component : CreateDealComponent
  },
  {path: 'DASHBOARD' , component : DashboardComponent
   , children : [
     {path: 'bar-chart1' , component : Barchart1Component},
     {path: 'bar-chart2' , component : Barchart2Component}
   ]
  },
  {path: 'USER-PROFILE' , component : CreateDealComponent
  },
  {path: 'deal' , component : CreateDealComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
