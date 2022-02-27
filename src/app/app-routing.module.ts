import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './selective-strategy.service';




@NgModule({
  declarations: [ 
  ],
  imports: [
    
    RouterModule.forRoot([      
        { path: 'home', component: HomeComponent},   
        {
          path: 'agencies',
          data:{ preload: true},
          loadChildren: () =>  
          import('./agencies/agency.module').then(m => m.AgencyModule)
        },
        { path: '', redirectTo: 'home', pathMatch:'full'},
        { path: '**', component:PageNotFoundComponent}
      ],{useHash: true, enableTracing:false, preloadingStrategy:SelectiveStrategy}),
   
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
