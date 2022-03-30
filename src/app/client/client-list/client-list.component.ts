import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client.interface';

@Component({
  selector: 'pm-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
@Input() clients: Client[];
  constructor() { }

  ngOnInit(): void {
  }

}
