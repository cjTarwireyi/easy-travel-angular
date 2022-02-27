import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent ,
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent, 
  ],
  imports: [     
    AppRoutingModule, 
    SharedModule,
    HomeModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(

      InMemoryDataService, 
      { dataEncapsulation: false, delay:1000}
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
