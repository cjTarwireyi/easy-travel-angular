import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';
import { Routes } from '@angular/router';

import { AgencyModule } from '../agencies/agency.module';
import { AgencyListComponent } from '../agencies/agency-list.component';
import { AgencyDetailComponent } from '../agencies/agency-detail.component';
import { AgencyDetailGuard } from '../agencies/agency-detail.guard';

const routes: Routes =[
  { path:'', component: HomeComponent,
children:[
   
      { path: 'agencies', component: AgencyListComponent},
      { path: 'agencies/:id', component: AgencyDetailComponent, canActivate:[AgencyDetailGuard]},
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', redirectTo: 'home', pathMatch:'full'}
    ]},

    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', redirectTo: 'home', pathMatch:'full'}
];
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
