import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AgencyModule } from './agencies/agency.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent ,
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent, 
  ],
  imports: [
    AgencyModule,   
    AppRoutingModule, 
    SharedModule,
    HomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
