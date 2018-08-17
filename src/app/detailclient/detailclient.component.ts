import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../client';
import { ClientService } from '../client.service';



@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  client: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id)
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.clientService.updateClient(this.client)
     .subscribe(() => this.goBack());
  }

}

