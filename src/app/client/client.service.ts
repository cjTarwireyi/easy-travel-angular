import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "./client.interface";

@Injectable({
    providedIn:'root'
})

export class ClientService{
    private url ='api/clients';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      constructor(private http: HttpClient){}     

    getClients(): Observable<Client[]>{
        return this.http.get<Client[]>(this.url).pipe(tap (data => console.log('All', JSON.stringify(data))));
     
    }

    getClient(id: number): Observable<Client| undefined>{
        return this.getClients()
        .pipe(
          map((agencies: Client[]) =>{
            console.log(agencies);
            return agencies.find(p => p.id === id);
          } )
        );
    }

    update(client: Client): Observable<any> {
        return this.http.put(this.url, client, this.httpOptions).pipe(
          tap(_ => console.log(`updated agency id=${client.id}`)),
          map(() => client) );
      }
}