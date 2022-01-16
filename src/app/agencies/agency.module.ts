import { NgModule } from '@angular/core';
import { AgencyListComponent } from './agency-list.component';
import { AgencyDetailComponent } from './agency-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgencyListComponent,     
    AgencyDetailComponent
  ],
  imports: [        
    SharedModule 
  ]
})
export class AgencyModule { }
