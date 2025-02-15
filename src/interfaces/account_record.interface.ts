import { AccountInterface } from "./account.interface";

export interface AccountRecordInterface{
    id?:number;
    type:string;
    name:string;
    amount:number;
    account_id:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
    account?:AccountInterface;
}