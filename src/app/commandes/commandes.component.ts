import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  client: Client;

  constructor( private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location) { }

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

  triggerResize(): void {
   console.log("coucou");
  }



}
