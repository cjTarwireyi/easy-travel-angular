import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';
import { Routes, RouterModule } from '@angular/router';

import { AgencyModule } from '../agencies/agency.module';
import { PageNotFoundComponent } from '../page-not-found.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

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
