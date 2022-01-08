import { Component } from "@angular/core";

@Component({
    selector:'pm-agencies',
    templateUrl:'./agency-list.component.html'
})
export class AgencyListComponent{
    pageTitle: string = 'Agency';
    listFilter: string = 'Testing';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showLogo: boolean = true;
    agencies: any[] = [
        {
            agencyId:1,
            agencyName:"Mukanya Coach",
            agencyCode:"MC001",
            starRating:4.1,
            available:"Y",
            industry:"Pasenger Transport",
            "logoUrl": "assets/agencyLogos/mk.jpeg"
        },
        {
            agencyId:1,
            agencyName:"Shumba Goods Transport",
            agencyCode:"SG001",
            starRating:4.5,
            available:"Y",
            industry:"Goods Transport",
            "logoUrl": "assets/agencyLogos/sg.png"
        },
        {
            agencyId:1,
            agencyName:"Nzou Logistic",
            agencyCode:"NZ001",
            starRating:3,
            available:"Y",
            industry:"Mixed",
            "logoUrl": "assets/agencyLogos/nz.png"
        }

    ];    
    errorMessage:  string = '';
   toggleLogo(): void{
       this.showLogo = !this.showLogo;
   }
}