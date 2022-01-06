import { Component } from "@angular/core";

@Component({
    selector:'pm-agencies',
    templateUrl:'./agency-list.component.html'
})
export class AgencyListComponent{
    pageTitle: string ='Agency';
    listFilter: string ='Testing';
    agencies: any[] = [
        {
            agencyId:1,
            agencyName:"Mukanya Coach",
            agencyCode:"MC001",
            starRating:4.1,
            available:"Y",
            industry:"Pasenger Transport"
        },
        {
            agencyId:1,
            agencyName:"Shumba Goods Transport",
            agencyCode:"SG001",
            starRating:4.5,
            available:"Y",
            industry:"Goods Transport"
        },
        {
            agencyId:1,
            agencyName:"Nzou Logistic",
            agencyCode:"NZ001",
            starRating:3,
            available:"Y",
            industry:"Mixed"
        }

    ];
    showImage:boolean = false;
    errorMessage:  string = '';
}