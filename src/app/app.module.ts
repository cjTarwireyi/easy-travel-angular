import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgencyModule } from './agencies/agency.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   
    RouterModule.forRoot([      
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'},
      { path: '**', redirectTo: 'home', pathMatch:'full'}
    ]),    
    BrowserAnimationsModule,
    MatButtonModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
