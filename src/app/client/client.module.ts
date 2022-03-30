import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddUpdateComponent } from './client-add-update/client-add-update.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    ClientAddUpdateComponent
  ],
  exports:[ClientComponent],
  imports: [
    CommonModule,
    FormsModule      
  ]
})
export class ClientModule { }
