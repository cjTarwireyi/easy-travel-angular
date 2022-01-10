import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgencyListComponent } from './agencies/agency-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { AgencyDetailComponent } from './agencies/agency-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AgencyDetailGuard } from './agencies/agency-detail.guard';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';



@NgModule({
  declarations: [
    AppComponent,
    AgencyListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    AgencyDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    jqxBarGaugeModule,
    RouterModule.forRoot([
      { path: 'agencies', component: AgencyListComponent},
      { path: 'agencies/:id', component: AgencyDetailComponent, canActivate:[AgencyDetailGuard]},
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'},
      { path: '**', redirectTo: 'home', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
