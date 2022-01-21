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
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle += `: ${id }`
  }
onBack(): void{
  this.router.navigate(['/agencies'])
}
}
