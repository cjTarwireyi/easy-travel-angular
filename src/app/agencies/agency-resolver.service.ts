import { catchError, map } from 'rxjs/operators';
import { AgencyService } from './agency.service';
import { IAgencyResolved } from './agency-list.interface';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AgencyResolver implements Resolve<IAgencyResolved>{

    constructor (private agencyService: AgencyService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAgencyResolved>  {
        const id = route.paramMap.get('id')
        if(isNaN(Number(id))){
            const message =`Agency id was not a number: ${id}`;
            console.log(message);
            return of({agency:undefined, error: message});
        }
       
       return this.agencyService.getAgency(Number(id))
       .pipe(
           map(agency => ({agency: agency})),
           catchError(error =>{
               const message = `Retrieval error: ${error}`;
               console.log(message);
               return of({agency: undefined, error: message});
               })
       );
    }
    
}