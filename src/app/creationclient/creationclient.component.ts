import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../client';
import { ClientService } from '../client.service';



@Component({
  selector: 'app-creationclient',
  templateUrl: './creationclient.component.html',
  styleUrls: ['./creationclient.component.css']
})
export class CreationclientComponent implements OnInit {

   client: Client;
   clients: Client[];

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getClients();
    this.client = {"id":-1,"name":""};
  }

  goBack(): void {
    this.location.back();
  }

  getClients(): void {
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.clientService.addClient({ name } as Client)
    .subscribe(client=>{
      this.clients.push(client);
      this.goBack();
    });
  }



}
