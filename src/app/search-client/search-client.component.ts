import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { CLIENTS} from '../base-donnee-client';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})

export class SearchClientComponent implements OnInit {

  clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>();



  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private clientService: ClientService) {}


  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.clients$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.clientService.searchClients(term)),
    );
  }

   goBack(): void {
    this.location.back();
  }

}




