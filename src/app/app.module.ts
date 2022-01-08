import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgencyListComponent } from './agencies/agency-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AgencyListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
