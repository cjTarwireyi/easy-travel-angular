import { Component, OnInit } from "@angular/core";
import { IAgency } from "./agency-list.interface";

@Component({
    selector:'pm-agencies',
    templateUrl:'./agency-list.component.html',
    styleUrls:['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit{  
    pageTitle: string = 'Agency';
    imageWidth: number = 20;
    imageMargin: number = 2;
    showLogo: boolean = true;

    private _listFilter: string='';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        console.log('in setter',value);
        this.filteredAgencies = this.performFilter(value);
    }
    filteredAgencies: IAgency[] =[]
    agencies: IAgency[] = [
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

    ];    
    errorMessage:  string = '';
    performFilter(filterBy:string): IAgency[]{
        filterBy.toLocaleLowerCase();
        return this.agencies.filter((agency:IAgency)=>
        agency.agencyName.toLocaleLowerCase().includes(filterBy));
    }
   toggleLogo(): void{
       this.showLogo = !this.showLogo;
   }
   onRatingClicked(message: string):void{
        console.log(message);
   }
   ngOnInit(): void {
        this.listFilter="";
    }
}