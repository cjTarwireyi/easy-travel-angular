import { NgModule } from '@angular/core';
import { AgencyListComponent } from './agency-list.component';
import { AgencyDetailComponent } from './agency-detail.component';
import { RouterModule } from '@angular/router';
import { AgencyDetailGuard } from './agency-detail.guard';
import { SharedModule } from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AgencyListComponent,     
    AgencyDetailComponent
  ],
  imports: [    
    RouterModule.forChild([
      { path: 'agencies', component: AgencyListComponent},
      { path: 'agencies/:id', component: AgencyDetailComponent, canActivate:[AgencyDetailGuard]},
    ]),
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule 
  ]
})
export class AgencyModule { }
