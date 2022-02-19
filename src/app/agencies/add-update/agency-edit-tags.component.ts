import { IAgency } from './../agency-list.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: './agency-edit-tags.component.html'
})
export class AgencyEditTagsComponent implements OnInit {
  errorMessage: string;
  newTags = '';
  agency: IAgency;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route?.parent?.data.subscribe(data => {
      this.agency = data['resolvedData'].agency;
    });
  }

  // Add the defined tags
  addTags(): void {
    if (!this.newTags) {
      this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
    } else {
      const tagArray = this.newTags.split(',');
     // this.agency.tags = this.agency.tags ? this.agency.tags.concat(tagArray) : tagArray;
      this.newTags = '';
      this.errorMessage = '';
    }
  }

  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
   // this.agency.tags.splice(idx, 1);
  }
}
