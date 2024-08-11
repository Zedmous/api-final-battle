export interface ProductInterface{
    id?:number;
    name:string;
    price:number;
    quantity:number;
    minimum_stock:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
}