import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {catchError, tap,map} from "rxjs/operators"
import { IAgency } from "./agency-list.interface";

@Injectable({
    providedIn:'root'
})
export class AgencyService{
    private agencyUrl ='api/agencies'
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient){
        
    }

    add(agency: IAgency): Observable<IAgency> {
      return this.http.post<IAgency>(this.agencyUrl, agency, this.httpOptions).pipe(
        tap((newAgency: IAgency) => console.log(`added Agency w/ id=${newAgency.id}`)),
        catchError(this.handleError<IAgency>('addAgency'))
      );
    }

    update(agent: IAgency): Observable<any> {
      return this.http.put(this.agencyUrl, agent, this.httpOptions).pipe(
        tap(_ => console.log(`updated agency id=${agent.id}`)),
        map(() => agent),
        catchError(this.handleError<any>('update'))
      );
    }

    getAgencies(): Observable<IAgency[]>{
        return this.http.get<IAgency[]>(this.agencyUrl).pipe( tap( data => console.log('All', JSON.stringify(data))),
        
        catchError(this.handleError<any>('updateHero')))
    }
    getAgency(id: number): Observable<IAgency | undefined> {
      return this.getAgencies()
        .pipe(
          map((agencies: IAgency[]) =>{
            console.log(agencies);
            return agencies.find(p => p.id === id)
          } )
        );
    }

    deleteAgency(id: number): Observable<IAgency> {
      const url = `${this.agencyUrl}/${id}`;
    
      return this.http.delete<IAgency>(url, this.httpOptions).pipe(
        tap(_ => console.log(`deleted agency id=${id}`)),
        catchError(this.handleError<IAgency>('deleteHero'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead  
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}