import { Injectable } from "@angular/core";
import { IAgency } from "./agency-list.interface";

@Injectable({
    providedIn:'root'
})
export class AgencyService{
    getAgencies(): IAgency[]{
        return[
            {
                agencyId:1,
                agencyName:"Mukanya Coach",
                agencyCode:"MC-001",
                starRating:4.1,
                available:"Y",
                industry:"Pasenger Transport",
                logoUrl: "assets/agencyLogos/mk.jpeg"
            },
            {
                agencyId:1,
                agencyName:"Shumba Goods Transport",
                agencyCode:"SG-001",
                starRating:4.5,
                available:"Y",
                industry:"Goods Transport",
                logoUrl: "assets/agencyLogos/sg.png"
            },
            {
                agencyId:1,
                agencyName:"Nzou Logistic",
                agencyCode:"NZ-001",
                starRating:3,
                available:"Y",
                industry:"Mixed",
                logoUrl: "assets/agencyLogos/nz.png"
            }
    
        ]
    }

}