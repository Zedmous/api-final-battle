
import { AccountRecordInterface } from "./account_record.interface";
import { RequestInterface } from "./request.interface";
export interface JournalInterface{
    id?:number;
    request_id:number;
    account_record_id:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
    account_record?:AccountRecordInterface;
    request?:RequestInterface;
}