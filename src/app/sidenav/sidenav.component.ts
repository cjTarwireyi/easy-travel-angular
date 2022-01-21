import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'pm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private router :Router) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  showFiller = false;
  smallScreen = false;
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
