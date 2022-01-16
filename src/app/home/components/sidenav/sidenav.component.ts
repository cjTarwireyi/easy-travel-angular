import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'pm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }
  showFiller = false;
  smallScreen = false;
  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) =>{
      this.smallScreen= state.matches
    })
  }

}
