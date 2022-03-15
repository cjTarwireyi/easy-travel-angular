import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { IState } from '../state/app.state';
import { AuthService } from '../user/auth.service';
import { getLoggedInUserSelector } from '../user/state/user.reducer';
import * as UserAction from "../user/state/user.action";

@Component({
  selector: 'pm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  hideloginButton: boolean;
  isLoggedIn: boolean;
  loggedInUserName: string;
  constructor(private router:Router, private authService: AuthService, private store: Store<IState>) { 
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        if(event.url ===  "/login"){
          this.hideloginButton = true;
        }else{
          this.hideloginButton = false;
          this.store.select(getLoggedInUserSelector).subscribe(
            loggedInUserName => this.loggedInUserName = loggedInUserName
        );
        }
      }
      this.isLoggedIn = authService.isLoggedIn;
      console.log(this.isLoggedIn);
    
    });
  
  }
  onLogin(): void {
    
  }
  onLogout(): void {
    this.store.dispatch(UserAction.loggedInUser({username: ""}));
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
  ngOnInit(): void {  
 
  }

}
