import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../client.interface';

@Component({
  selector: 'pm-client-add-update',
  templateUrl: './client-add-update.component.html',
  styleUrls: ['./client-add-update.component.scss']
})
export class ClientAddUpdateComponent implements OnInit {
@Input() client: Client;
@Output() clientChanged = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.clientChanged.emit(this.client);
  }

}
