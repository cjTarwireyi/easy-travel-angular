import { AgencyEffects } from './state/agency.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AgencyListComponent } from './agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddUpdateComponent } from './add-update/add-update.component';
import { AgencyResolver } from './agency-resolver.service';
import { AgencyEditInfoComponent } from './add-update/agency-edit-info.component';
import { AgencyEditTagsComponent } from './add-update/agency-edit-tags.component';
import { StoreModule } from '@ngrx/store';
import { agencyReducer } from './state/agency.reducer';


@NgModule({
  declarations: [
    AgencyListComponent,     
    AgencyDetailComponent,
    AddUpdateComponent,
    AgencyEditInfoComponent,
    AgencyEditTagsComponent
  ],
  imports: [    
    MatCheckboxModule,    
    SharedModule ,
    StoreModule.forFeature("agencies",agencyReducer),
    EffectsModule.forFeature([AgencyEffects]),
    RouterModule.forChild([     
        { path: '', component: AgencyListComponent},
        { path: ':id', component: AgencyDetailComponent, resolve: {resolvedData: AgencyResolver}},
        { path: ':id/edit', component: AddUpdateComponent, resolve: {resolvedData: AgencyResolver},
        children:[
          { path:'', redirectTo:'info',  pathMatch: 'full'},        
          { path: 'info', component: AgencyEditInfoComponent},
          { path: 'tags', component: AgencyEditTagsComponent}
        ],},
    ])
  ]
})
export class AgencyModule { }
