import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';




@NgModule({
  declarations: [ 
  ],
  imports: [
    
    RouterModule.forRoot([      
        { path: 'home', component: HomeComponent},     
        { path: '', redirectTo: 'home', pathMatch:'full'},
        { path: '**', component:PageNotFoundComponent}
      ],{useHash: true,enableTracing:false}),
   
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
