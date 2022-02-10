import { HttpClient, HttpErrorResponse,HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
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
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead  
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}