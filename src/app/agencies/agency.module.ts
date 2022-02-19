import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AgencyListComponent } from './agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddUpdateComponent } from './add-update/add-update.component';
import { AgencyResolver } from './agency-resolver.service';


@NgModule({
  declarations: [
    AgencyListComponent,     
    AgencyDetailComponent,
    AddUpdateComponent
  ],
  imports: [    
    MatCheckboxModule,    
    SharedModule ,
    RouterModule.forChild([
      { path: 'agencies', component: AgencyListComponent},
      { path: 'agencies/:id', component: AgencyDetailComponent, resolve: {resolvedData: AgencyResolver}},
      { path: 'agencies/:id/edit', component: AddUpdateComponent, resolve: {resolvedData: AgencyResolver}},
    ])
  ]
})
export class AgencyModule { }
