export interface PurchaseDetailInterface{
    id?:number;
    product_id:number;
    purchase_id:number;
    price:number;
    quantity:number;
    deletedAt:Date;
}