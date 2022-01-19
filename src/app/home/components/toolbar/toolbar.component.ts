import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }
  loggedIn = false
  onLogin(): void {
    this.loggedIn = true
  }
  onLogout(): void {
    this.loggedIn = false;
  }
  ngOnInit(): void {
  }

}
