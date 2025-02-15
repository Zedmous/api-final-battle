import { RequestInterface } from "./request.interface";

export interface RequestTypeInterface{
    id?:number;
    name:string;
    bot:boolean;
    amount:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
    requests?:RequestInterface[];
}