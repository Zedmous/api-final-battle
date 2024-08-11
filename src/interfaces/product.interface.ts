export interface ProductInterface{
    id?:number;
    name:string;
    price:number;
    cost:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
}