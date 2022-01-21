import { NgModule } from '@angular/core';
import { AgencyListComponent } from './agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AgencyListComponent,     
    AgencyDetailComponent
  ],
  imports: [        
    SharedModule ,
    RouterModule.forChild([
      { path: 'agencies', component: AgencyListComponent},
      { path: 'agencies/:id', component: AgencyDetailComponent},
    ])
  ]
})
export class AgencyModule { }
