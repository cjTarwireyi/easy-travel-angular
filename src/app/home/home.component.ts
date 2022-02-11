import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAgency } from '../agencies/agency-list.interface';
import { AgencyService } from '../agencies/agency.service';


@Component({
  selector:'pm-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public pageTitle = 'Welcome to Home Page'; 
  longText = `A travel agency is a private retailer or public service that provides travel
   and tourism-related services to the general public on behalf of accommodation or travel
    suppliers   to offer different kinds of travelling packages for each destination.`; 
  sub!: Subscription;
  errorMessage:  string = '';
  showDefaultCard: boolean = false;
  agencies: IAgency[] = [ ];  
  tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => {
            let realVal = parseInt(value);
            return ('Year: 2016<br/>Price Index:' + realVal);
        }
    }
    values: number[] = [102, 115, 130, 140];

    constructor(private agencyService: AgencyService){
      
  }

    ngOnInit(): void {     
      this.sub = this.agencyService.getAgencies().subscribe({
        next: agencies => {
            this.agencies = agencies;           
        },
        error: err => this.errorMessage = err
    });
         
      }
}