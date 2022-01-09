import { Component, OnInit } from "@angular/core";
import { IAgency } from "./agency-list.interface";
import { AgencyService } from "./agency.service";

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
    private _agencyService;
    constructor(private agencyService: AgencyService){
        this._agencyService = agencyService
    }
    
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
    agencies: IAgency[] = [ ];    
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
        this.agencies = this._agencyService.getAgencies();
        this.filteredAgencies = this.agencies;
    }   
}