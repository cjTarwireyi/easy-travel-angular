import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgency } from '../agency-list.interface';
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

    this.route.paramMap.subscribe(
      params =>{
        const id = +(params.get('id') ?? 0);
        this.pageTitle = id === 0 ? "Add Agency" : "Update Agency";
        if(id > 0){
          this.getAgency(id);
          return;
        } 
        console.log("logging")    
        this.agency = <IAgency> {}; 
      }
    );
  }
  getAgency(id:number){
    this.agencyService.getAgency(id).subscribe({
      next: agency => this.agency = agency,
      error: err => this.errorMessage = err
    })
  }

  availableValueChange($event: { checked: boolean; }) {
    if(this.agency)
    this.agency.available= $event.checked;
}
  onSave(){
    if (this.agency) {
      this.agencyService.update(this.agency)
        .subscribe(() => this.onCancel());
    }
  }

  onCancel(): void{
    this.router.navigate(['/agencies'])
  }
}
