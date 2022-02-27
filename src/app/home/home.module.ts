import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,  
  ],
  imports: [  
    jqxBarGaugeModule,
     SharedModule,   
     RouterModule.forChild([      
      ])
  ]
})
export class HomeModule { }
