import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'pm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  hideloginButton: boolean;
  isLoggedIn: boolean;

  constructor(private router:Router, private authService: AuthService) { 
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        if(event.url ===  "/login"){
          this.hideloginButton = true;
        }else{
          this.hideloginButton = false;
        }
      }
      this.isLoggedIn = authService.isLoggedIn;
      console.log(this.isLoggedIn);
    
    });
  
  }
  onLogin(): void {
    
  }
  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
  ngOnInit(): void {

  }

}
