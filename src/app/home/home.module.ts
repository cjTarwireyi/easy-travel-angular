import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './home.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';
import { RouterModule, Routes } from '@angular/router';
import { AgencyModule } from '../agencies/agency.module';


const routes: Routes =[
  { path:'', component: HomeComponent,
children:[
    { path:'', component: MainContentComponent}
]},
  { path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    jqxBarGaugeModule,
     SharedModule,
     AgencyModule,
    RouterModule.forRoot(routes),
  ]
})
export class HomeModule { }
