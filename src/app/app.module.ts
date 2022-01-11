import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';
import { AgencyModule } from './agencies/agency.module';



@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    jqxBarGaugeModule,
    RouterModule.forRoot([      
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'},
      { path: '**', redirectTo: 'home', pathMatch:'full'}
    ]),
    AgencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
