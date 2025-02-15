import { JournalInterface } from "./journal.interface";
import { RequestTypeInterface } from "./request_type.interface";


export interface RequestInterface{
    id?:number;
    request_type_id:number;
    description:string;
    amount:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:string;
    request_type?:RequestTypeInterface;
    journals?:JournalInterface[];
}