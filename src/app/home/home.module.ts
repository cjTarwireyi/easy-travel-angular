import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';

import { AgencyModule } from '../agencies/agency.module';

@NgModule({
  declarations: [
    HomeComponent,  
  ],
  imports: [
  
    jqxBarGaugeModule,
     SharedModule,
     AgencyModule,
  ]
})
export class HomeModule { }
