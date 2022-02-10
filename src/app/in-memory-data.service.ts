import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IAgency } from './agencies/agency-list.interface';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const agencies = [
      {
          "id":1,
          "agencyName":"Mukanya Coach",
          "agencyCode":"MC-001",
          "starRating":4.1,
          "available":true,
          "industry":"Pasenger Transport",
          "logoUrl": "assets/agencyLogos/mk.jpeg"
      },
      {
          "id":2,
          "agencyName":"Shumba Goods Transport",
          "agencyCode":"SG-001",
          "starRating":4.5,
          "available":false,
          "industry":"Goods Transport",
          "logoUrl": "assets/agencyLogos/sg.png"
      },
      {
          "id":3,
          "agencyName":"Nzou Logistic",
          "agencyCode":"NZ-001",
          "starRating":3,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":4,
          "agencyName":"A1 Logistic",
          "agencyCode":"A1-001",
          "starRating":2,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":5,
          "agencyName":"MK Logistic",
          "agencyCode":"Mk-001",
          "starRating":3.4,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":6,
          "agencyName":"G6 Travel",
          "agencyCode":"G6-001",
          "starRating":5,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":7,
          "agencyName":"N7 Logistic",
          "agencyCode":"NZ7-001",
          "starRating":3,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":8,
          "agencyName":"XY Logistic",
          "agencyCode":"XY-001",
          "starRating":3,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":9,
          "agencyName":"V9 Logistic",
          "agencyCode":"V9-001",
          "starRating":3,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      },
      {
          "id":10,
          "agencyName":"WQ Logistic",
          "agencyCode":"QW-001",
          "starRating":3,
          "available":true,
          "industry":"Mixed",
          "logoUrl": "assets/agencyLogos/nz.png"
      }
  
  ];
    return {agencies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the agencies array is empty,
  // the method below returns the initial number (11).
  // if the agencies array is not empty, the method below returns the highest
  // agency id + 1.
  genId(agencies: IAgency[]): number {
    return agencies.length > 0 ? Math.max(...agencies.map(agency => agency.id)) + 1 : 1;
  }
}