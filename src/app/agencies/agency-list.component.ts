import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort} from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { IAgency } from "./agency-list.interface";
import { AgencyService } from "./agency.service";

@Component({
    selector:'pm-agencies',
    templateUrl:'./agency-list.component.html',
    styleUrls:['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit,OnDestroy, AfterViewInit {  
    pageTitle: string = 'Agency';
    imageWidth: number = 20;
    imageMargin: number = 2;
    showLogo: boolean = true;
    sub!: Subscription;
    private _agencyService;
    constructor(private agencyService: AgencyService, private _liveAnnouncer: LiveAnnouncer){
        this._agencyService = agencyService
    }
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    private _listFilter: string='';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;        
        this.dataSource.data = this.performFilter(value);
    }
    displayedColumns:string[] = ['agencyName', 'agencyCode', 'available', 'industry','starRating']
    dataSource = new MatTableDataSource<IAgency>();
    
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
    this.sub = this._agencyService.getAgencies().subscribe({
            next: agencies => {
                this.agencies = agencies;
                this.filteredAgencies = this.agencies;
                this.dataSource.data= this.agencies;
            },
            error: err => this.errorMessage = err
        });
       
    }
    
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
       
}