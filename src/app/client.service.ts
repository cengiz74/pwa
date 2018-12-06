import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './base-donnee-client';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})


export class ClientService {

     private clientsUrl = 'api/clients';





  constructor(

    private http: HttpClient,



  ) { }




  getClients (): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(clients => this.log('fetched clients')),
        catchError(this.handleError('getClients', []))
      );
  }


  getClientNo404<Data>(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/?id=${id}`;
    return this.http.get<Client[]>(url)
      .pipe(
        map(clients => clients[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} client id=${id}`);
        }),
        catchError(this.handleError<Client>(`getClient id=${id}`))
      );
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      tap(_ => this.log(`fetched client id=${id}`)),
      catchError(this.handleError<Client>(`getClient id=${id}`))
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  private log(message: string) {
    console.log(`ClientService: ${message}`);
  }

  /** PUT: update the hero on the server */
  updateClient (client: Client): Observable<any> {
    return this.http.put(this.clientsUrl, client, httpOptions).pipe(
      tap(_ => this.log(`updated client id=${client.id}`)),
      catchError(this.handleError<any>('updateClient'))
    );
  }

  /** POST: add a new hero to the server */
  addClient (client: Client): Observable<Client> {
  console.log("Le nom est : "+client.name);
    return this.http.post<Client>(this.clientsUrl, client, httpOptions).pipe(
      tap((client: Client) => this.log(`added client w/ id=${client.id} name=${client.name}`)),
      catchError(this.handleError<Client>('addClient'))
    );
  }



  searchClients(term: string): Observable<Client[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Client[]>(`${this.clientsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found clients matching "${term}"`)),
      catchError(this.handleError<Client[]>('searchClients', []))
    );
  }



}
