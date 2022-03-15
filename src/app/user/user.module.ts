import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature("user",userReducer),
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
