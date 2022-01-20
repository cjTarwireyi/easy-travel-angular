import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SidenavComponent } from './home/components/sidenav/sidenav.component';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './home/components/toolbar/toolbar.component';
import { MainContentComponent } from './home/components/main-content/main-content.component';
import { AgencyListComponent } from './agencies/agency-list.component';



@NgModule({
  declarations: [
    AppComponent ,
    PageNotFoundComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HomeModule,
    MatMenuModule,
    CommonModule,
    SharedModule,
    RouterModule.forRoot([      
      { path: 'home', component: HomeComponent},
      { path: 'agencies', component: AgencyListComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'},
      { path: '**', component:PageNotFoundComponent}
    ],{useHash: true}), 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
