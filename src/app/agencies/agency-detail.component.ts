import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {
pageTitle: string = "Agency Details";
  constructor() { }

  ngOnInit(): void {
  }

}
