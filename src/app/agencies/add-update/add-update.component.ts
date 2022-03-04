import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAgency, IAgencyResolved } from '../agency-list.interface';
import { AgencyService } from '../agency.service';
import { IState } from '../state/agency.reducer';
import * as AgencyAction from "../state/agency.action";

@Component({
  selector: 'pm-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {
  
  pageTitle: string = "Add Agency";
  errorMessage:string="";
  agency:IAgency  = <IAgency> {};
  
  constructor(private agencyService: AgencyService, private route:ActivatedRoute, private router:Router, private store: Store<IState>) { }

  ngOnInit(): void {
  
    this.route.data.subscribe( data => {
      const resolvedData: IAgencyResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      if(resolvedData.agency){
        this.pageTitle =  "Update Agency";
        this.agency = resolvedData.agency;
        this.store.dispatch(AgencyAction.setCurrentAgency({currentAgencyId: this.agency.id}));
      }else{
        this.agency = <IAgency> {}; 
        this.pageTitle ="Add Agency";
      }     
    }) 
  }

  resolveAgency(){
  
  }

  onSave(){
    if (this.agency) {
      if(this.agency.id > 0){
        if(this.agency)
        this.store.dispatch(AgencyAction.updateAgency({agency:this.agency}));
        this.onCancel()
      }else{
        this.agencyService.add(this.agency)
        .subscribe(() => this.onCancel());
      }
    
    }
  }

  onDelete(){
    if(this.agency)
    this.agencyService.deleteHero(this.agency.id).subscribe(() => this.onCancel())
  }

  onCancel(): void{
    this.router.navigate(['/agencies'])
  }
}
