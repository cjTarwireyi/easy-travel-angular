import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgency, IAgencyResolved } from '../agency-list.interface';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'pm-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {
  pageTitle: string = "Add Agency";
  errorMessage:string="";
  agency:IAgency | undefined  = <IAgency> {};
  
  constructor(private agencyService: AgencyService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  
    this.route.data.subscribe( data => {
      const resolvedData: IAgencyResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      if(resolvedData.agency){
        this.pageTitle =  "Update Agency";
        this.agency = resolvedData.agency;
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
        this.agencyService.update(this.agency)
        .subscribe(() => this.onCancel());
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
