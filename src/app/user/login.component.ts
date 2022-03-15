import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from '../state/app.state';

import { AuthService } from './auth.service';
import * as UserAction from "./state/user.action";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService,
              private router: Router, private store: Store<IState>) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      if (this.authService.redirectUrl) {      
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {       
        this.router.navigate(['/home']);
      }
      this.store.dispatch(UserAction.loggedInUser({username: userName}));
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
