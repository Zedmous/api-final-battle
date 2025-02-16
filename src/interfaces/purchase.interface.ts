
import { PurchaseDetailInterface } from "./purchase_detail.interface";


export interface PurchaseInterface{
    id?:number;
    reference:string;
    supplier_id:number;
    status?:string;
    purchase_details?:PurchaseDetailInterface[];
}