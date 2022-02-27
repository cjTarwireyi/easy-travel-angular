import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../app.animations';

@Component({
  selector: 'pm-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  animations:[slideInAnimation]
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
