import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, Event, NavigationStart,NavigationEnd,NavigationError,NavigationCancel,} from '@angular/router';
import { slideInAnimation } from '../app.animations';

const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'pm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  
  animations:[slideInAnimation]
})
export class SidenavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private router :Router) { 

    router.events.subscribe((routerEvent:Event)=>{
      this.checkRouterEvent(routerEvent);
    })
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  showFiller = false;
  smallScreen = false;
  loading: boolean = false;


  checkRouterEvent(routerEvent:Event): void{
    if(routerEvent instanceof NavigationStart){
      this.loading = true;
    }

    if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
      this.loading = false;
    }
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) =>{
      this.smallScreen= state.matches
    })
    this.router.events.subscribe(() => {
      if(this.smallScreen){
          this.sidenav.close();
      }
    })
  }
}
