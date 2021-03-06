export interface IAgency{
    id:number,
    agencyName:string,
    agencyCode:string,
    starRating:number,
    available:boolean,
    industry:string,
    logoUrl: string,
    category:string,
    tags:string[]
}

export interface IAgencyResolved{
    agency?: IAgency,
    error?:any
}