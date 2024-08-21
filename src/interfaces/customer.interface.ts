export interface CustomerInterface{
    id?:number;
    name:string;
    identification:string;
    email:string;
    telephone:string;
    address:string;
    deletedAt:Date;
    status:boolean;
}