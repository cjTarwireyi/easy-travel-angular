import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IAgency, IAgencyResolved } from './../agency-list.interface';

@Component({
  templateUrl: './agency-edit-info.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AgencyEditInfoComponent implements OnInit { 

  errorMessage: string;
  agency: IAgency;

  constructor(private route: ActivatedRoute) { }

  availableValueChange($event: { checked: boolean; }) {
    if(this.agency)
    this.agency.available= $event.checked;
}

  ngOnInit(): void {
    this.route?.parent?.data.subscribe(data => {
        const resolvedData: IAgencyResolved = data['resolvedData'];
        this.errorMessage = resolvedData.error;
        if(resolvedData.agency){          
          this.agency = resolvedData.agency;
        }else{
          this.agency = <IAgency> {};          
        }
    });
  } 
}
