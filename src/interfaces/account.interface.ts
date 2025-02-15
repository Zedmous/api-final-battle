import { AccountRecordInterface } from "./account_record.interface";

export interface AccountInterface{
    id?:number;
    name:string;
    type_account:string;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
    account_records?:AccountRecordInterface[];
}