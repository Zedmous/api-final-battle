import { CustomerInterface } from "./customer.interface";
import { SaleDetailInterface } from "./sale_detail.interface";
import { TaxInterface } from "./tax.interface";

export interface SaleInterface{
    id?:number;
    customer_id:number;
    discount:number;
    tax_id:number;
    status:boolean;
    sale_details?:SaleDetailInterface[];
    customer?:CustomerInterface;
    tax?:TaxInterface;
}