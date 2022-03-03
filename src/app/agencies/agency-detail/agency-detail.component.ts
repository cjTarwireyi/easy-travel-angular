import { IAgency, IAgencyResolved } from '../agency-list.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {
  pageTitle: string = "Agency Details";
  agency:IAgency | undefined ;
  errorMessage:  string = '';

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle += `: ${id }`

    const resolvedData: IAgencyResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.agency = resolvedData.agency;
  }

  onBack(): void{
    this.router.navigate(['/agencies'])
  }
}
