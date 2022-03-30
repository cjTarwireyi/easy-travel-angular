import { Component, OnInit } from '@angular/core';
import { Client } from './client.interface';
import { ClientService } from './client.service';

@Component({
  selector: 'pm-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client: any;
  clients: Client[];
  constructor(private clientService:ClientService) { }
  changed(client: any){
   
    this.clientService.update(client).subscribe();
    this.getClient();
    this.getClients();
  }
  ngOnInit(): void {
    this.getClient();
    this.getClients();   
  }

  getClient(){
    this.clientService.getClient(1).subscribe((client: Client | undefined) => {
      this.client = client;
    })   
  }
  getClients(){
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
  })
  }

}
