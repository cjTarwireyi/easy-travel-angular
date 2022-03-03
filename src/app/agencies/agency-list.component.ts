import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort} from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { IAgency } from "./agency-list.interface";
import { AgencyService } from "./agency.service";
import { AuthorToggleAction } from "./state/agency.action";
import { getAgencies, getShowCopyRightsInfo, IState } from "./state/agency.reducer";
import * as AgencyAction from "./state/agency.action";

@Component({
    templateUrl:'./agency-list.component.html',
    styleUrls:['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit,OnDestroy, AfterViewInit {  

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    pageTitle: string = 'Agency';
    imageWidth: number = 20;
    imageMargin: number = 2;
    showLogo: boolean = true;
    sub!: Subscription;
    showCopyRightsInfo: boolean;
    private _agencyService;
    displayedColumns:string[] = ['agencyName', 'agencyCode', 'available', 'industry','starRating','edit']
    dataSource = new MatTableDataSource<IAgency>();    
    filteredAgencies: IAgency[] =[]
    agencies: IAgency[] = [ ];    
    errorMessage:  string = '';
    private _listFilter: string='';
    agencies$: Observable<IAgency[]>;

    constructor(private agencyService: AgencyService, private store: Store<IState>){
        this._agencyService = agencyService
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;        
        this.dataSource.data = this.performFilter(value);
    }

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

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onShowAuthor(): void {
        this.store.dispatch(AgencyAction.AuthorToggleAction());
    }

    ngOnInit(): void { 

        this.sub=   this.store.select(getAgencies).subscribe(
            agencies =>  this.dataSource.data= agencies
        )

        this.store.dispatch(AgencyAction.LoadAgencies());

        this.store.select(getShowCopyRightsInfo).subscribe(
            showCopyRightsInfo => this.showCopyRightsInfo = showCopyRightsInfo
        );
    }
    
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }       
}