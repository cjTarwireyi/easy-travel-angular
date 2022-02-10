import { AgencyService } from './../agency.service';
import { IAgency } from '../agency-list.interface';
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
  constructor(private route:ActivatedRoute, private router:Router, private agencyService: AgencyService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle += `: ${id }`

    this.getAgency(id);
  }
  getAgency(id:number){
    this.agencyService.getAgency(id).subscribe({
      next: agency => this.agency = agency,
      error: err => this.errorMessage = err
    })
  }
onBack(): void{
  this.router.navigate(['/agencies'])
}
}
